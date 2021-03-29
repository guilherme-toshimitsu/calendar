import axios from 'axios';
import envConfig from '@config';
import { mockBase, getMockResponse } from './mockinterceptors';
import qs from 'query-string';

const MOCK = envConfig.api.mock;

const getApiConfig = () => ({
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'pt-BR',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
  },
});

const base = (baseURL, config) => {
  const api = axios.create({
    mode: 'cors',
    baseURL,
    ...config,
  });

  const axiosRequest = api.request;

  api.request = (path, options) => {
    return axiosRequest({
      url: path,
      ...getApiConfig(),
      ...options,
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' }),
    }).then(res => res.data);
  };

  api.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return MOCK ? getMockResponse(error) : Promise.reject(error);
    }
  );

  api.interceptors.request.use(
    async config => {
      return MOCK ? mockBase(config) : config;
    },
    error => Promise.reject(error)
  );

  return api;
};

export default base;
export { getApiConfig, envConfig };
