import base from './base';
import config from '@config';

const baseApi = base(config.api.baseURL, { timeout: config.api.timeout });

const request = (path, options) => baseApi.request(path, { ...options });

export default {
  request,
  baseApi,
};
