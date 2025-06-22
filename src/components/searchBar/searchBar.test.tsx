import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './searchBar';

describe('SearchBar', () => {
  it('renders input', () => {
    render(<SearchBar value="" onChange={() => {}} />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });

  it('calls onChange when typing', () => {
    const handleChange = vi.fn();
    render(<SearchBar value="" onChange={handleChange} />);
    fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalledWith('test');
  });

});