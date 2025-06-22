

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table'

import Pagination from './pagination';

import type { TableProps } from '../../types/table';

import AlertMessage from '../alert/alert';


const Table = ({data, columns, changePage} : TableProps) => {

  const table = useReactTable({
    data : data.items,
    columns : columns,
    manualPagination: true,
    pageCount: data.pages,
    state: {
      pagination: {
        pageIndex : data.page - 1,
        pageSize : data.size,
      },
    },
    getCoreRowModel: getCoreRowModel()
  })

  if (data.items.length === 0) {
    return (
      <AlertMessage variant="primary" message="No data available." />
    )
  }

  return (
    <div>
    <table className="table table-striped table-bordered">
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Pagination
        currentPage={data.page}
        numPages={data.pages}
        changePage={changePage}
      />
    </div>
    </div>
  )

};

export default Table;