import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from '../';

describe('<Home> Home Page Container', () => {
  it('renders', () => {
    const container = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
