import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/faqs/`;

const getFaq = (): Promise<AxiosResponse<FaqResponse>> => {
  return api.get(`${API_URL}`);
};

export { getFaq };
