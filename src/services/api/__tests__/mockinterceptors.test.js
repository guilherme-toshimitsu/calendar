import { mockBase, getMockResponse, envConfig } from '../mockinterceptors';

describe('Seller apis', () => {
  const oldConfig = envConfig;

  beforeEach(() => {
    jest.resetModules(); // this is important - it clears the cache
    jest.clearAllMocks();
  });

  afterEach(() => {
    envConfig.api = oldConfig.api;
  });

  const config = {
    baseURL: 'bla/mock',
    url: 'bla/mock',
    mockData: {},
  };

  const config2 = {
    baseURL: 'http://bla.com/bla',
    url: 'http://bla.com/bla',
    mockData: {},
  };

  it('internalUrl no error', async () => {
    envConfig.api.baseURL = 'bla';
    envConfig.api.mock = true;
    envConfig.api.mockError = false;
    const data = mockBase(config);
    expect(data).toBeTruthy();
  });

  it('internalUrl with error', async () => {
    envConfig.api.baseURL = 'bla';
    envConfig.api.mock = true;
    envConfig.api.mockError = true;
    const data = mockBase(config);
    expect(data).toBeTruthy();
  });

  it('internalUrl response no error', async () => {
    envConfig.api.baseURL = 'bla';
    envConfig.api.mock = true;
    envConfig.api.mockError = false;
    const data = getMockResponse(config);
    expect(data).toBeTruthy();
  });

  it('internalUrl response with error', async () => {
    envConfig.api.baseURL = 'bla';
    envConfig.api.mock = true;
    envConfig.api.mockError = true;
    const data = getMockResponse(config);
    expect(data).toBeTruthy();
  });

  it('externalUrl no error', async () => {
    envConfig.api.baseURL = 'ble';
    envConfig.api.mock = true;
    envConfig.api.mockError = false;
    const data = mockBase(config2);
    expect(data).toBeTruthy();
  });

  it('externalUrl with error', async () => {
    envConfig.api.baseURL = 'ble';
    envConfig.api.mock = true;
    envConfig.api.mockError = true;
    const data = mockBase(config2);
    expect(data).toBeTruthy();
  });
});
