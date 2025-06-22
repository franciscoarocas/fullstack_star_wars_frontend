import { render, screen } from '@testing-library/react';
import AlertMessage from './alert';

describe('AlertMessage', () => {
  it('renders the alert with the correct message and variant', () => {
    render(<AlertMessage variant="primary" message="Alert!" />);
    const alert = screen.getByText('Alert!');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveClass('alert-primary');
  });
});