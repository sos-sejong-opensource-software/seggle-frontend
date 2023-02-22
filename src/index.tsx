import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import './style/index.css';
import { AxiosError, AxiosResponse } from 'axios';

const handleError = (e: unknown) => {
  if (e instanceof AxiosError) {
    const errorResponse = e.response as AxiosResponse<{ code?: number; message?: string }>;
    if (
      errorResponse === undefined ||
      errorResponse.data.code === undefined ||
      errorResponse.data.message === undefined
    ) {
      alert('에러입니다.');
      return;
    }
    if (errorResponse.status === 400 || errorResponse.status === 401)
      alert(errorResponse.data.message);
    else if (errorResponse.status === 403) {
      alert('권한이 없습니다.');
      // Todo: 확인 필요함.. 로그인이 안되어있어서 확인 불가함
      history.back();
    }
  }
};

const root = document.getElementById('root') as HTMLElement;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { suspense: true, onError: (e) => handleError(e) },
    mutations: {
      onError: (e) => handleError(e),
    },
  },
});

createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
