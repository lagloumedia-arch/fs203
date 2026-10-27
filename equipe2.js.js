import { render, screen } from '@testing-library/react';
import equipe2  from 'equipe2.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
