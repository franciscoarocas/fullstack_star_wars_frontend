
import { render, screen } from '@testing-library/react';
import Loader from './loader';

describe('Loader', () => {
  it('Render 3 react spinnes', () => {
    render(<Loader/>);

    const spinners = screen.getAllByTestId('loader');
    expect(spinners).toHaveLength(3);
  });
});
