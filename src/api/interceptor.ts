import { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios';

interface IAxiosError extends AxiosError {
  config?: AxiosRequestConfig & { _retry: boolean };
}

export const setInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => response,
    async (error: IAxiosError) => {
      try {
        const errorAPI = error.config;

        if (errorAPI && !errorAPI._retry) {
          errorAPI._retry = true;
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
