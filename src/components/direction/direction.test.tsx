import { render, screen } from '@testing-library/react';
import DirectionSelect from './direction';

describe('DirectionSelect', () => {
  it('renders both asc and desc options', () => {
    render(<DirectionSelect onChange={() => {}} />);
    expect(screen.getByRole('option', { name: /asc/i })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: /desc/i })).toBeInTheDocument();
  });
});