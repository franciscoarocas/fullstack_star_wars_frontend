
import { render, screen, fireEvent } from '@testing-library/react';
import TablePagination from './pagination';

describe('TablePagination', () => {
  it('renders pagination controls', () => {
    render(<TablePagination currentPage={3} numPages={10} changePage={() => {}} />);
    // Should render first and last page numbers
    expect(screen.getAllByText('1')[0]).toBeInTheDocument();
    expect(screen.getAllByText('3')[0]).toBeInTheDocument();
    // Should render ellipsis
    // Should render navigation buttons
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Last')).toBeInTheDocument();
  });


  it('calls changePage when a page number is clicked', () => {
    const mockChangePage = vi.fn();
    render(<TablePagination currentPage={2} numPages={5} changePage={mockChangePage} />);
    const pageBtn = screen.getByText('3');
    fireEvent.click(pageBtn);
    expect(mockChangePage).toHaveBeenCalledWith(3);
  });
});