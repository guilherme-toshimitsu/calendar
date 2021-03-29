const returnTestOk = () => {
  return {
    data: {
      bla:'bla',
      message: 'ok'
    }
  }
}

const returnTestError = () => {
  return {
    message: 'Falhou',
    status: '404'
  }
}

export default {
  returnTestError,
  returnTestOk
}
