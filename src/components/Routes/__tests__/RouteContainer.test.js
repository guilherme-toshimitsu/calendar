import React from 'react';
import { render } from '@testing-library/react';
import RouteContainer from '../RouteContainer';
import Home from '@pages/Home';
import { BrowserRouter } from 'react-router-dom';

describe('<RouteContainer> Route Component Loader', () => {
  it('renders', () => {
    const route = { path: ['/', '/home'], exact: true, component: Home };

    const container = render(
      <>
        <BrowserRouter>
          <RouteContainer route={route} />
        </BrowserRouter>
      </>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
