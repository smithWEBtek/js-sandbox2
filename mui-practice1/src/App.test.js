import { render, screen } from '@testing-library/react';
import App from './App';
import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  // NOT "/user", nothing to be relative to!
  rest.get('https://api.backend.dev/user', (req, res, ctx) => {
    return res(ctx.json({ firstName: 'John' }))
  }),
)

beforeAll(() => {
  // Establish requests interception layer before all tests.
  server.listen()
})
afterAll(() => {
  // Clean up after all tests are done, preventing this
  // interception layer from affecting irrelevant tests.
  server.close()
})

test('renders the Pets dropdown selector', () => {
  render(<App />);
  const selectElement = screen.getByText('Choose a pet')
  expect(selectElement).toBeInTheDocument();
});

test('allows user to login', () => {

})
