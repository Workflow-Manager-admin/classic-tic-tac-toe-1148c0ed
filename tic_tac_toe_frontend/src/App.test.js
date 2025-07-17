import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders game title', () => {
  render(<App />);
  const titleElement = screen.getByText(/tic tac toe/i);
  expect(titleElement).toBeInTheDocument();
});

test('shows next player status', () => {
  render(<App />);
  const statusElement = screen.getByText(/next player: x/i);
  expect(statusElement).toBeInTheDocument();
});

test('allows playing a move', () => {
  render(<App />);
  const squares = screen.getAllByRole('button');
  fireEvent.click(squares[0]);
  expect(squares[0]).toHaveTextContent('X');
});
