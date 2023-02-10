import { fileApi } from '@/api';

const API_URL = `/problems`;

const createProblem = (payload: FormData) => {
  return fileApi.post(`${API_URL}/`, payload);
};

const editProblem = (problemId: string, payload: FormData) => {
  return fileApi.put(`${API_URL}/${problemId}/`, payload);
};

export { createProblem, editProblem };
