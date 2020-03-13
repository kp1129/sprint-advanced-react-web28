import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@testing-library/jest-dom/extend-expect';
import {render, getByText} from '@testing-library/react';



test('App component renders without crashing', () => {
  render(<App />);
})

test('Header is visible to the user', () => {
  //arrange
  const {getByText} = render(<App />);
  //act
  const header = getByText(/women's world cup/i);
  //assert
  expect(header).toBeInTheDocument();
  expect(header).toBeVisible();
})

