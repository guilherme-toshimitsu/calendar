import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ControlledLoading from '../';

describe('<ControlledLoading> Route Component Loader', () => {
  it('renders default loading', () => {
    const component = render(<ControlledLoading isLoading />);
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('renders component not loading', () => {
    const component = render(<ControlledLoading isLoading={false} renderComponent={<div>oi</div>} />);
    expect(component.asFragment()).toMatchSnapshot();
  });

  it('renders component not loading with children', () => {
    const component = render(
      <ControlledLoading isLoading={false}>
        <div>oi</div>
      </ControlledLoading>
    );
    expect(component.asFragment()).toMatchSnapshot();
  });
});
