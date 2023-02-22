import { api, fileApi } from '@/api';

const API_URL = `/problems`;

const getAllProblemList = ({ keyword, currentPage }: { keyword: string; currentPage: number }) => {
  return api.get(`${API_URL}?keyword=${keyword}&page=${currentPage}`);
};

const getProblem = (problemId: string) => {
  return api.get(`${API_URL}/${problemId}`);
};

const editProblem = (problemId: string, payload: FormData) => {
  return fileApi.put(`${API_URL}/${problemId}/`, payload);
};

const editProblemPublic = (problemId: string) => {
  return api.post(`${API_URL}/${problemId}/check/`);
};

const deleteProblem = (problemId: string) => {
  return api.delete(`${API_URL}/${problemId}`);
};

export { getAllProblemList, getProblem, editProblem, editProblemPublic, deleteProblem };
