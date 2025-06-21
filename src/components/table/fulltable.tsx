
import { useState, useEffect } from 'react';

import Table from './table';
import SearchBar from '../searchBar/searchBar';

import Direction from '../direction/Direction';

import HttpClient from '../../api/default';

import type { API_Params, API_Direction } from '../../types/table';

import background from '../../assets/background.jpg';

import { Row, Col } from 'react-bootstrap';

const API_URL = import.meta.env.VITE_API_URL



const FullTable = ({endpointPath, columns}) => {

  const [data, setData] = useState({ items: [], size : 1, page : 1 });
  const [page, setPage] = useState<number>(1);
  const [searchInput, setSearchInput] = useState<string>('');
  const [direction, setDirection] = useState<API_Direction>('asc');

  const getAndSetTableContent = (page : number, searchInput : string, direction : API_Direction) => {
    const params : API_Params = {page : page, size : 15, dir : direction};
    if (searchInput !== '') {
      params['search'] = searchInput;
    }
    HttpClient.get(`${API_URL}/${endpointPath}`, params)
    .then(api_data => {
      setData(api_data);
    })
  }

  useEffect(() => {
    getAndSetTableContent(page, searchInput, direction);
  }, [page])

  useEffect(() => {
    getAndSetTableContent(1, searchInput, direction);
  }, [searchInput])

  useEffect(() => {
    getAndSetTableContent(1, searchInput, direction);
  }, [direction])

  return (
    <div style={{
      backgroundImage : `url(${background})`,
      backgroundSize: 'cover',
      padding: '2rem',
      height: '100%'
    }}>
    <Row>
      <Col>
        <Direction onChange={setDirection}/>
      </Col>
      <Col>
        <SearchBar value={searchInput} onChange ={setSearchInput}/>
      </Col>
    </Row>
    <Table data={data} columns={columns} changePage={setPage}></Table>
    </div>
  )
};

export default FullTable;