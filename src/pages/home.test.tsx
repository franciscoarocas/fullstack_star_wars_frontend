import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './home';

describe('Home', () => {
  it('renders the People and Planets buttons with links', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const peopleButton = screen.getByRole('button', { name: /people/i });
    const planetsButton = screen.getByRole('button', { name: /planets/i });

    expect(peopleButton).toBeInTheDocument();
    expect(planetsButton).toBeInTheDocument();

    expect(peopleButton.closest('a')).toHaveAttribute('href', '/people');
    expect(planetsButton.closest('a')).toHaveAttribute('href', '/planets');
  });
});