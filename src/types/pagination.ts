
export type paginationProps = {
  currentPage : number,
  numPages : number,
  changePage : (page: number) => void;
};