import { render, screen } from '@testing-library/react';
import App from './App';

test('renders editorial portfolio', () => {
  render(<App />);
  expect(screen.getByText(/SAMUVEL/i)).toBeInTheDocument();
  expect(screen.getByText(/Full-Stack Developer/i)).toBeInTheDocument();
  expect(screen.getByText(/Selected Work/i)).toBeInTheDocument();
});
