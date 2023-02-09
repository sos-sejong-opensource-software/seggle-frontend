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

const getProblemList = ({ keyword }: { keyword: string }) => {
  return api.get(`/problems?keyword=${keyword}`);
};

const getClassStudentList = (classId: string) => {
  return api.get(`${API_URL}/${classId}/std/`);
};

const getClassTaList = (classId: string) => {
  return api.get(`${API_URL}/${classId}/ta/`);
};

const createClassStudentList = ({
  classId,
  payload,
}: {
  classId: string;
  payload: ClassStudentRequest;
}) => {
  return api.post(`${API_URL}/${classId}/std/`, payload);
};

const createClassTaList = ({
  classId,
  payload,
}: {
  classId: string;
  payload: ClassStudentRequest;
}) => {
  return api.post(`${API_URL}/${classId}/ta/`, payload);
};

const getContestList = (classId: string) => {
  return api.get(`${API_URL}/${classId}/contests`);
};

const getContestProblemList = (classId: string, contestId: string) => {
  return api.get(`${API_URL}/${classId}/contests/${contestId}`);
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
  createClass,
  editClass,
  deleteClass,
  getProblemList,
  editProblemPublic,
  getContestList,
  getClassStudentList,
  getClassTaList,
  createClassStudentList,
  createClassTaList,
  getContestProblemList,
  deleteProblem,
};
