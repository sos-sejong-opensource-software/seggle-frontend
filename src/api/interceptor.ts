import { AxiosInstance, AxiosError, AxiosRequestHeaders, AxiosRequestConfig } from 'axios';

import { STORAGE } from '@/constants';
import { parseJwt, isExpired } from '@/utils/decodeJwt';

import { getAccessToken } from './auth';

interface IAxiosError extends AxiosError {
  config?: AxiosRequestConfig & { _retry: boolean };
}

const token: Token = {
  access: null,
};

const setAccessTokenOnReqeustHeader = (request: AxiosRequestConfig, access: string) => {
  request.headers = { ...request.headers } as Partial<AxiosRequestHeaders>;
  request.headers['Authorization'] = `Bearer ${access}`;
};

export const setInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    async (config) => {
      const refreshToken = localStorage.getItem(STORAGE.REFRESH_TOKEN);

      if ((refreshToken && isExpired(parseJwt(refreshToken))) || !refreshToken) {
        localStorage.removeItem(STORAGE.REFRESH_TOKEN);
      }

      if (token.access && !isExpired(parseJwt(token.access))) {
        setAccessTokenOnReqeustHeader(config, token.access);
      }

      if (refreshToken && token.access && isExpired(parseJwt(token.access))) {
        try {
          const {
            data: { access },
          } = await getAccessToken(refreshToken);

          token.access = access;
          setAccessTokenOnReqeustHeader(config, token.access);
        } catch (error) {
          token.access = null;
          throw new AxiosError('access 토큰이 만료되었습니다.');
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error: IAxiosError) => {
      const refreshToken = localStorage.getItem(STORAGE.REFRESH_TOKEN);
      try {
        const errorAPI = error.config;

        if (errorAPI && !errorAPI._retry && refreshToken) {
          errorAPI._retry = true;

          const {
            data: { access },
          } = await getAccessToken(refreshToken);

          token.access = access;
          return instance(errorAPI);
        }
      } catch (err) {
        throw new AxiosError('Axios Interceptors Response ERROR');
      }
      return Promise.reject(error);
    }
  );

  return instance;
};
