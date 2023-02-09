import { api, fileApi } from '@/api';

const API_URL = `/problems`;

const getProblem = (problemId: string) => {
  return api.get(`${API_URL}/${problemId}`);
};

const createProblem = (payload: FormData) => {
  return fileApi.post(`${API_URL}/`, payload);
};

export { getProblem, createProblem };
