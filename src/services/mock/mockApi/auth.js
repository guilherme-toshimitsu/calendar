const returnLoginOk = (config) => {
  if (config.data) {
    if (config.data.email && !config.data.email.includes('@gmail.com')) {
      return { message: 'falhou', status: '404', isError: true };
    }
  } else {
    return { message: 'falhou', status: '404', isError: true };
  }

  return {
    data: {
      token: 'bla',
      email: config.data.email,
      message: 'ok',
    },
  };
};

const returnLoginError = () => {
  return {
    message: 'Falhou',
    status: '404',
  };
};

export default {
  returnLoginOk,
  returnLoginError,
};
