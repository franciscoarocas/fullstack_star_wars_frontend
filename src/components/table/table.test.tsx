import { render, screen } from '@testing-library/react';
import Table from './table';

vi.mock('./pagination', () => ({
  default: ({ currentPage, numPages }: any) => (
    <div data-testid="pagination">
      Page: {currentPage} / {numPages}
    </div>
  ),
}));

const columns = [
  { header: 'Name', accessorKey: 'name', cell: (info: any) => info.getValue() },
  { header: 'Age', accessorKey: 'age', cell: (info: any) => info.getValue() },
];

const data = {
  items: [
    { id: 1, name: 'Luke', age: 23 },
    { id: 2, name: 'Leia', age: 23 },
  ],
  page: 1,
  pages: 5,
  size: 2,
};

describe('Table', () => {
  it('renders table headers and rows', () => {
    render(<Table data={data} columns={columns} changePage={() => {}} />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('Luke')).toBeInTheDocument();
    expect(screen.getByText('Leia')).toBeInTheDocument();
  });

  it('renders pagination with correct props', () => {
    render(<Table data={data} columns={columns} changePage={() => {}} />);
    expect(screen.getByTestId('pagination')).toHaveTextContent('Page: 1 / 5');
  });

  it('shows alert when no data', () => {
    render(<Table data={{ ...data, items: [] }} columns={columns} changePage={() => {}} />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });
});