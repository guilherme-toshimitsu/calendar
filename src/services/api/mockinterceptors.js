import envConfig from '@config';
import mock from '../mock';

const MOCK_ERROR = () => envConfig.api.mockError;
const BASE_URL_API = () => envConfig.api.baseURL;

const hasBaseUrl = (config) => {
  return config && config.baseURL && config.baseURL.includes(BASE_URL_API());
};

const mockBaseURL = (config) => {
  const mockedPayload = new Error();
  const url = config.url.replace(BASE_URL_API(), '');
  mockedPayload.mockData = MOCK_ERROR()
    ? mock.local[`${url}-error`](config)
    : mock.local[`${url}`](config);
  mockedPayload.config = config;
  return Promise.reject(mockedPayload);
};

const mockExternalUrl = (config) => {
  const mockedPayload = new Error();
  const url = config.url;
  mockedPayload.mockData = MOCK_ERROR()
    ? mock.external[`${url}-error`](config)
    : mock.external[`${url}`](config);
  mockedPayload.config = config;
  return Promise.reject(mockedPayload);
};

const getMockResponse = (mockResponse) => {
  const { mockData, config } = mockResponse;

  if (MOCK_ERROR() || mockData.isError) {
    const err = new Error(mockData.message || 'error');
    err.code = mockData.status || '404';
    return Promise.reject(err);
  }

  return Promise.resolve({
    data: mockData ? mockData.data : {},
    status: 200,
    statusText: 'OK',
    isMock: true,
    config,
    ...mockData,
  });
};

const mockBase = (config) =>
  hasBaseUrl(config) ? mockBaseURL(config) : mockExternalUrl(config);

export { getMockResponse, mockBase, envConfig };
