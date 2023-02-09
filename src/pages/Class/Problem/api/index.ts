import { api, fileApi } from '@/api';

const API_URL = `/problems`;

const getProblem = (problemId: string) => {
  return api.get(`${API_URL}/${problemId}`);
};

const createProblem = (payload: FormData) => {
  return fileApi.post(`${API_URL}/`, payload);
};

const getContestProblem = ({ classId, contestId, contestProblemId }: ContestProblemRequest) => {
  return api.get(`/class/${classId}/contests/${contestId}/${contestProblemId}`);
};

export { getProblem, createProblem, getContestProblem };
