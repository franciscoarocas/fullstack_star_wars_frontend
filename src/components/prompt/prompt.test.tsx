import { render, screen } from '@testing-library/react';
import Prompt from './prompt';

describe('Prompt', () => {
  it('renders textarea, input, button and tip', () => {
    render(<Prompt />);
    const textboxes = screen.getAllByRole('textbox');
    expect(textboxes.length).toBe(2);
    expect(screen.getByPlaceholderText("Write a question about name or planet...")).toBeInTheDocument();
  });
});