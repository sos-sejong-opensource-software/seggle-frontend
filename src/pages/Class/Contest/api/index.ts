import { api } from '@/api';

const API_URL = `/class`;

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

const deleteContest = (classId: string, contestId: string) => {
  return api.delete(`${API_URL}/${classId}/contests/${contestId}/`);
};

const editContest = ({
  classId,
  contestId,
  payload,
}: {
  classId: string;
  contestId: string;
  payload: ContestRequest;
}) => {
  return api.patch(`${API_URL}/${classId}/contests/${contestId}/`, payload);
};

export {
  getContestList,
  getContestProblemList,
  createContest,
  editContestVisible,
  deleteContest,
  editContest,
};
