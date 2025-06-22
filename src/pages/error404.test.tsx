import { render, screen } from '@testing-library/react';
import Error404 from './Error404';

describe('Error404', () => {
  it('renders the 404 heading', () => {
    render(<Error404 />);
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });

});