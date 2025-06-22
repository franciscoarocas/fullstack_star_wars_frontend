
import { render, screen } from '@testing-library/react';
import Logo from './logo';

describe('Logo', () => {
  it('renders the Star Wars logo image', () => {
    render(<Logo />);
    const img = screen.getByAltText(/star wars logo/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', expect.stringContaining('star_wars_logo.png'));
  });
});