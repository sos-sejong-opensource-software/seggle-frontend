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

/** FIXME: 페이지네이션, username */
const getContestProblemSubmission = ({
  classId,
  contestId,
  contestProblemId,
}: ContestProblemRequest) => {
  return api.get(`/class/${classId}/contests/${contestId}/${contestProblemId}/submissions`);
};

const createContestProblemSubmission = ({
  classId,
  contestId,
  contestProblemId,
  payload,
}: ContestProblemRequest & { payload: FormData }) => {
  return fileApi.post(
    `/class/${classId}/contests/${contestId}/${contestProblemId}/submission/`,
    payload
  );
};

const createContestProblemSumbissionCheck = ({
  classId,
  contestId,
  contestProblemId,
}: ContestProblemRequest) => {
  return api.patch(`/class/${classId}/contests/${contestId}/${contestProblemId}/check/`);
};

export {
  getProblem,
  createProblem,
  getContestProblem,
  getContestProblemSubmission,
  createContestProblemSubmission,
  createContestProblemSumbissionCheck,
};
