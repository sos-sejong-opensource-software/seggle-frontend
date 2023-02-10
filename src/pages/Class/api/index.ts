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

const createClass = (payload: ClassRequest) => {
  return api.post(`${API_URL}/`, payload);
};

const editClass = ({ classId, payload }: { classId: string; payload: ClassRequest }) => {
  return api.patch(`${API_URL}/${classId}`, payload);
};

const deleteClass = (classId: string) => {
  return api.delete(`${API_URL}/${classId}`);
};

export { getClassList, editClassList, getClass, createClass, editClass, deleteClass };
