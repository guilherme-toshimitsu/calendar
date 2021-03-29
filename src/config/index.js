export default {
  api: {
    baseURL: process.env.REACT_APP_API_URL,
    timeout: process.env.REACT_APP_API_TIMEOUT,
    mock: process.env.REACT_APP_MOCK_API === 'true',
    mockError: process.env.REACT_APP_MOCK_API_RETURN_ERROR === 'true' && process.env.REACT_APP_MOCK_API === 'true',
  },
};
