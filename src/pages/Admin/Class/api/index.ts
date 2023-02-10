import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/admin`;

const getClasses = (keyword: string): Promise<AxiosResponse<AdminAllClassesResponse>> => {
  return api.get(`${API_URL}/class?keyword=${keyword}`);
};

export { getClasses };
