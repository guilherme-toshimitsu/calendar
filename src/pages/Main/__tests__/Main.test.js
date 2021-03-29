import React from 'react';
import { render } from '@testing-library/react';
import Main from '..';

describe('<Main> Main Container Page', () => {
  it('renders', () => {
    const container = render(<Main />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
