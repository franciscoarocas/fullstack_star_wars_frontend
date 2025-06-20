

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table'

import Pagination from './pagination';


const Table = ({data, columns, changePage}) => {

  const table = useReactTable({
    data : data.items,
    columns : columns,
    manualPagination: true,
    pageCount: data.total,
    state: {
      pagination: {
        pageIndex : data.page - 1,
        pageSize : data.size,
      },
    },
    getCoreRowModel: getCoreRowModel()
  })

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
    <Pagination
      currentPage={data.page}
      numPages={data.size}
      changePage={changePage}
    />
    </div>
  )

};

export default Table;