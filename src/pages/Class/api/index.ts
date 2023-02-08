import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/class`;

const getClassList = (): Promise<AxiosResponse<ClassListResponse>> => {
  return api.get(`/users${API_URL}/`);
};

const editClassList = (payload: ClassListIdRequest) => {
  return api.patch(`/users${API_URL}/`, payload);
};

const getClass = (classId: string): Promise<AxiosResponse<ClassResponse>> => {
  return api.get(`${API_URL}/${classId}/`);
};

const editClass = ({ classId, payload }: { classId: string; payload: ClassRequest }) => {
  return api.patch(`${API_URL}/${classId}`, payload);
};

const deleteClass = (classId: string) => {
  return api.delete(`${API_URL}/${classId}`);
};

const getProblemList = ({ keyword }: { keyword: string }) => {
  return api.get(`/problems?keyword=${keyword}`);
};

const editProblemPublic = (problemId: string) => {
  return api.post(`/problems/${problemId}/check/`);
};

const deleteProblem = (problemId: string) => {
  return api.delete(`/problems/${problemId}`);
};

export {
  getClassList,
  editClassList,
  getClass,
  editClass,
  deleteClass,
  getProblemList,
  editProblemPublic,
  deleteProblem,
};
