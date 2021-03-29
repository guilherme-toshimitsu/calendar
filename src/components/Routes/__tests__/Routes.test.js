import React from 'react';
import { render } from '@testing-library/react';
import Routes from '../Routes';
import Home from '@pages/Home';
import { BrowserRouter } from 'react-router-dom';

describe('<Routes> Routes Component Loader', () => {
  it('renders', () => {
    const routes = [{ path: ['/', '/home'], exact: true, component: Home }];

    const container = render(
      <>
        <BrowserRouter>
          <Routes routes={routes} />
        </BrowserRouter>
      </>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
