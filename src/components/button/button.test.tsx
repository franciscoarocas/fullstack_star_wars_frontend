import { render, screen } from '@testing-library/react';
import Button from './button';

describe('Button', () => {
  it('renders children inside the button', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByRole('button', { name: /click me/i });
    expect(btn).toBeInTheDocument();
  });
});