
import Pagination from 'react-bootstrap/Pagination';

import type { paginationProps } from '../../types/pagination';

const TablePagination = ({currentPage, numPages, changePage} : paginationProps) => {

  const generatePaginatorItems = (currentPage : number, numPages : number, changePage : Function) => {

    const pageRanks = [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2
    ].filter(page => page > 0 && page <= numPages);

    return pageRanks.map(page => (
      <Pagination.Item key={page} active={page === currentPage} onClick={() => changePage(page)}>
        {page}
      </Pagination.Item>
    ));

  }

  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />
      {generatePaginatorItems(currentPage, numPages, changePage)}
      <Pagination.Ellipsis />
      <Pagination.Item>{numPages}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default TablePagination;