import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import App from './App';

test('renders find-friend link', () => {
  render(<App />);
  const linkElement = screen.getByText(/thor/i);
  expect(linkElement).toBeInTheDocument();
});

test('link is clickable', async () => {
  render(<App />);
  const linkElement = screen.getByText(/thor/i);
  await userEvent.click(linkElement)
  expect(await window.location.href).toEqual(
    'http://localhost/');
});
