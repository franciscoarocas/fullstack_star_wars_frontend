import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './header';

describe('Header', () => {
  it('renders the logo, page title, and Go Home button with link', () => {
    render(
      <MemoryRouter>
        <Header pageTitle="Test Page" />
      </MemoryRouter>
    );

    expect(screen.getByAltText("Star Wars logo")).toBeInTheDocument();

    const goHomeLink = screen.getByRole('link', { name: /go home/i });
    expect(goHomeLink).toBeInTheDocument();
    expect(goHomeLink).toHaveAttribute('href', '/');
  });
});