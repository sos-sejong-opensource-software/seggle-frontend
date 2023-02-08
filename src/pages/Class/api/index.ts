import { AxiosResponse } from 'axios';

import { api } from '@/api';

const API_URL = `/class`;

/** ClassList */

const getClassList = (): Promise<AxiosResponse<ClassListResponse>> => {
  return api.get(`/users${API_URL}/`);
};

const editClassList = (payload: ClassListIdRequest) => {
  return api.patch(`/users${API_URL}/`, payload);
};

/** Class */

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

/** 전체 문제 목록 */

const getProblemList = ({ keyword }: { keyword: string }) => {
  return api.get(`/problems?keyword=${keyword}`);
};

/** 수강생 및 TA 관리 */

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

/** 과제 및 시험 */

const getContestList = (classId: string) => {
  return api.get(`${API_URL}/${classId}/contests`);
};

const getContestProblemList = (classId: string, contestId: string) => {
  return api.get(`${API_URL}/${classId}/contests/${contestId}`);
};

const createContest = ({ classId, payload }: { classId: string; payload: ContestRequest }) => {
  return api.post(`${API_URL}/${classId}/contests/`, payload);
};

const editContestVisible = (classId: string, contestId: string) => {
  return api.patch(`${API_URL}/${classId}/contests/${contestId}/check/`);
};

export {
  getClassList,
  editClassList,
  getClass,
  createClass,
  editClass,
  deleteClass,
  getProblemList,
  getClassStudentList,
  getClassTaList,
  createClassStudentList,
  createClassTaList,
  getContestList,
  getContestProblemList,
  createContest,
  editContestVisible,
};
