import { render, screen } from '@testing-library/react';
import App from './App';
import count from './CounterService';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('counts', done => {
  const state = {
    started: true,
    counter: 0
  };
  const setState = state => {
    expect(state.counter).toEqual(1);
    done();
  };
  count(state, setState, 1);
});