import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import FullTable from './fulltable';

vi.mock('./table', () => ({
  default: () => <div>Mocked Table</div>,
}));
vi.mock('../searchBar/searchBar', () => ({
  default: ({ value }: { value: string }) => <div>Mocked SearchBar: {value}</div>,
}));
vi.mock('../sort/sort', () => ({
  default: () => <div>Mocked Sort</div>,
}));
vi.mock('../direction/direction', () => ({
  default: () => <div>Mocked Direction</div>,
}));
vi.mock('../loader/loader', () => ({
  default: () => <div>Mocked Loader</div>,
}));

vi.mock('../../api/default', () => ({
  default: {
    get: vi.fn(() => Promise.resolve({ items: [{ id: 1 }], size: 1, page: 1, pages: 1 })),
  },
}));

describe('FullTable', () => {
  it('shows loader while loading and renders table after loading', async () => {
    render(<FullTable endpointPath="people" columns={[]} />);
    expect(screen.getByText(/mocked loader/i)).toBeInTheDocument();

    const table = await screen.findByText("Mocked Table");
    expect(table).toBeInTheDocument();

    expect(screen.getByText("Mocked Sort")).toBeInTheDocument();
    expect(screen.getByText("Mocked Direction")).toBeInTheDocument();
  });
});