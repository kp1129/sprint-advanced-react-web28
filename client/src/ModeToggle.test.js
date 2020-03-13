import React from 'react';
import ReactDOM from 'react-dom';
import ModeToggle from './ModeToggle';
import '@testing-library/jest-dom/extend-expect';
import {render, getByText} from '@testing-library/react';

test('ModeToggle component renders without crashing', () => {
    render(<ModeToggle />)
});

test("ModeToggle component is visible to the user", () => {
    const { getByText } = render(<ModeToggle />);
    const mode = getByText(/toggle mode/i);
    expect(mode).toBeInTheDocument();
    expect(mode).toBeVisible();
  });

