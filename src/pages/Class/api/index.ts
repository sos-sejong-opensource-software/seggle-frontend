import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/class`;

const getClassList = (): Promise<AxiosResponse<ClassListResponse>> => {
  return api.get(`/users${API_URL}/`);
};

const editClassList = (payload: ClassListIdRequest) => {
  return api.patch(`/users${API_URL}/`, payload);
};

export { getClassList, editClassList };
