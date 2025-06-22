import { render } from '@testing-library/react';
import App from './App';

describe('App routing', () => {
  it('renders Home on default route', () => {
    render(<App />);
  });
});