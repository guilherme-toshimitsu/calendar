import React from 'react';
import MainStyle from '@components/MainStyle';
import Routes, { BrowserRouter } from '@components/Routes';
import routes, { settings } from '@routes';

const Main = () => {
  return (
    <BrowserRouter settings={settings}>
      <MainStyle>
        <Routes routes={routes} />
      </MainStyle>
    </BrowserRouter>
  );
};

export default Main;
