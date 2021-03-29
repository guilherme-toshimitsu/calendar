import api from '../api';

describe('Seller apis', () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // this is important - it clears the cache
    jest.clearAllMocks();
    process.env = { ...OLD_ENV };
    delete process.env.NODE_ENV;
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  it('Should call request', async () => {
    jest.spyOn(api.baseApi, 'request').mockImplementation(() => true);

    const data = api.request('/', { method: 'GET' });

    expect(data).toBe(true);
  });

  it('Should call baseApi', async () => {
    process.env.REACT_APP_API_URL = 'http://google.com';
    jest.spyOn(api, 'request').mockImplementation(() => Promise.resolve({ result: [] }));

    await api.request('/', { method: 'GET' });

    expect(api.request).toHaveBeenCalled();
  });
});
