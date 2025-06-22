import { render, screen, fireEvent } from '@testing-library/react';
import Sort from './sort';
import { vi } from 'vitest';

describe('Sort', () => {
  it('renders all sort options', () => {
    render(<Sort onChange={() => {}} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: "---" })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: "Name" })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: "Created" })).toBeInTheDocument();
  });

  it('calls onChange with the selected value', () => {
    const handleChange = vi.fn();
    render(<Sort onChange={handleChange} />);
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'created' } });
    expect(handleChange).toHaveBeenCalledWith('created');
  });
});