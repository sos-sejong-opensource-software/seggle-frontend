import { api } from '@/api';

const API_URL = `/class`;

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

export { getClassStudentList, getClassTaList, createClassStudentList, createClassTaList };
