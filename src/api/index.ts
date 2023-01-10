import axios, { AxiosRequestConfig } from 'axios';

import { setInterceptors } from './interceptor';

const defaultConfig: AxiosRequestConfig = {
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

const fileConfig = {
  ...defaultConfig,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};

const createInstance = (config: AxiosRequestConfig) => {
  const instance = axios.create(config);
  return setInterceptors(instance);
};

export const api = createInstance(defaultConfig);
export const fileApi = createInstance(fileConfig);
