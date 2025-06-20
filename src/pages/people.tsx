
import { useState, useEffect } from 'react';

import Table from '../components/table/table';
import SearchBar from '../components/searchBar/searchBar';

import HttpClient from '../api/default';

import type {
  ColumnDef
} from '@tanstack/react-table'

const API_URL = import.meta.env.VITE_API_URL

// 2. Definición de columnas
const columns: ColumnDef<any>[] = [
  {
    header: 'Name',
    accessorKey: 'name'
  },
  {
    header: 'Height',
    accessorKey: 'height'
  },
  {
    header: 'Mass',
    accessorKey: 'mass'
  },
  {
    header: 'Hair Color',
    accessorKey: 'hair_color'
  },
  {
    header: 'Skin Color',
    accessorKey: 'skin_color'
  },
  {
    header: 'Eye Color',
    accessorKey: 'eye_color'
  },
  {
    header: 'Birth Year',
    accessorKey: 'birth_year'
  },
  {
    header: 'Gender',
    accessorKey: 'gender'
  }
]

// 3. Compon

const People = () => {

  const [people, setPeople] = useState({ items: [], size : 1, page : 1 });
  const [page, changePage] = useState<number>(1);
  const [searchInput, setSearchInput] = useState<string>('');

  const getAndSetTableContent = (page : number, searchInput : string) => {
    const params = {page : page, size : 15}
    if (searchInput !== '') {
      params['search'] = searchInput;
    }
    HttpClient.get(`${API_URL}/people`, params)
    .then(data => {
      setPeople(data);
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
    <Table data={people} columns={columns} changePage={changePage}></Table>
    </>
  )
};

export default People;