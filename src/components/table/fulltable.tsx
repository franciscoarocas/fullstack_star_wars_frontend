
import { useState, useEffect } from 'react';

import Table from './table';
import SearchBar from '../searchBar/searchBar';
import Sort from '../sort/sort';
import Direction from '../direction/direction';

import HttpClient from '../../api/default';

import type { API_Params, API_Direction, API_Sorting } from '../../types/table';

import Loader from '../loader/loader';

import { Row, Col } from 'react-bootstrap';

import type { FullTableProps } from '../../types/table';


const API_URL = import.meta.env.VITE_API_URL



const FullTable = ({endpointPath, columns} : FullTableProps) => {

  const [data, setData] = useState({ items: [], size : 1, page : 1 });
  const [page, setPage] = useState<number>(1);
  const [searchInput, setSearchInput] = useState<string>('');
  const [direction, setDirection] = useState<API_Direction>('asc');
  const [sort, setSort] = useState<API_Sorting>(); // Default sort by name
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getAndSetTableContent = (page : number, searchInput : string, direction : API_Direction) => {
    setIsLoading(true);
    const params : API_Params = {page : page, size : 15, dir : direction, sort : sort};
    if (searchInput !== '') {
      params['search'] = searchInput;
    }
    HttpClient.get(`${API_URL}/${endpointPath}`, params)
    .then(api_data => {
      setData(api_data);
    }).finally(() => {
      setIsLoading(false);
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

  useEffect(() => {
    getAndSetTableContent(1, searchInput, direction);
  }, [sort])

  return (
    <div style={{
      padding: '2rem',
      height: '100%'
    }}>
    <Row>
      <Col md={3}>
        <Direction onChange={(value: string) => setDirection(value as API_Direction)}/>
      </Col>
      <Col md={3}>
        <Sort onChange={(value: string | undefined) => setSort(value as API_Sorting)}/>
      </Col>
      <Col md={6}>
        <SearchBar value={searchInput} onChange ={setSearchInput}/>
      </Col>
    </Row>
    {
      isLoading ? (
        <Loader/>
      ) : (
        <Table data={data} columns={columns} changePage={setPage}></Table>
      )
    }
    </div>
  )
};

export default FullTable;