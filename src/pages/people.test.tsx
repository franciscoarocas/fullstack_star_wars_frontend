import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import People from './people';

vi.mock('../components/table/fulltable', () => ({
  __esModule: true,
  default: () => <div>Mocked FullTable</div>,
}));

vi.mock('../components/header/header', () => ({
  __esModule: true,
  default: ({ pageTitle }: { pageTitle: string }) => <h1>{pageTitle}</h1>,
}));

describe('People page', () => {
  it('renders the header and the table', () => {
    render(
      <MemoryRouter>
        <People />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: "People Table" })).toBeInTheDocument();
    expect(screen.getByText("Mocked FullTable")).toBeInTheDocument();
  });
});