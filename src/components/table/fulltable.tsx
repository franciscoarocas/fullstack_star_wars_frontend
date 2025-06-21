
import { useState, useEffect } from 'react';

import Table from './table';
import SearchBar from '../searchBar/searchBar';

import HttpClient from '../../api/default';

import type { API_Params } from '../../types/table';

const API_URL = import.meta.env.VITE_API_URL



const FullTable = ({endpointPath, columns}) => {

  const [data, setData] = useState({ items: [], size : 1, page : 1 });
  const [page, setPage] = useState<number>(1);
  const [searchInput, setSearchInput] = useState<string>('');

  const getAndSetTableContent = (page : number, searchInput : string) => {
    const params : API_Params = {page : page, size : 15}
    if (searchInput !== '') {
      params['search'] = searchInput;
    }
    HttpClient.get(`${API_URL}/${endpointPath}`, params)
    .then(api_data => {
      setData(api_data);
    })
  }

  useEffect(() => {
    getAndSetTableContent(page, searchInput);
  }, [page])

  useEffect(() => {
    getAndSetTableContent(1, searchInput);
  }, [searchInput])

  return (
    <>
    <SearchBar value={searchInput} onChange ={setSearchInput}/>
    <Table data={data} columns={columns} changePage={setPage}></Table>
    </>
  )
};

export default FullTable;