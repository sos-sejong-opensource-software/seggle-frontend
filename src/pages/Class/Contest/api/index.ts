import { api, fileApi } from '@/api';

const API_URL = `/class`;

const getContestList = (classId: string) => {
  return api.get(`${API_URL}/${classId}/contests`);
};

const createContest = ({ classId, payload }: { classId: string; payload: ContestRequest }) => {
  return api.post(`${API_URL}/${classId}/contests/`, payload);
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

const editContestVisible = (classId: string, contestId: string) => {
  return api.patch(`${API_URL}/${classId}/contests/${contestId}/check/`);
};

const deleteContest = (classId: string, contestId: string) => {
  return api.delete(`${API_URL}/${classId}/contests/${contestId}/`);
};

const getContestProblemList = (classId: string, contestId: string) => {
  return api.get(`${API_URL}/${classId}/contests/${contestId}`);
};

const getContestProblem = ({ classId, contestId, contestProblemId }: ContestProblemRequest) => {
  return api.get(`${API_URL}/${classId}/contests/${contestId}/${contestProblemId}`);
};

const getContestProblemSubmission = ({
  classId,
  contestId,
  contestProblemId,
  currentPage,
  username,
}: ContestProblemRequest & { username?: string }) => {
  return api.get(
    `${API_URL}/${classId}/contests/${contestId}/${contestProblemId}/submissions?page=${currentPage}${
      username ? `&username=${username}` : ''
    }`
  );
};

const createContestProblem = ({
  classId,
  contestId,
  payload,
}: {
  classId: string;
  contestId: string;
  payload: FormData;
}) => {
  return fileApi.post(`${API_URL}/${classId}/contests/${contestId}/`, payload);
};

const createContestProblemSubmission = ({
  classId,
  contestId,
  contestProblemId,
  payload,
}: ContestProblemRequest & { payload: FormData }) => {
  return fileApi.post(
    `${API_URL}/${classId}/contests/${contestId}/${contestProblemId}/submission/`,
    payload
  );
};

const createContestProblemSumbissionCheck = ({
  classId,
  contestId,
  contestProblemId,
}: ContestProblemRequest) => {
  return api.patch(`${API_URL}/${classId}/contests/${contestId}/${contestProblemId}/check/`);
};

export {
  getContestList,
  createContest,
  editContest,
  editContestVisible,
  deleteContest,
  getContestProblemList,
  getContestProblem,
  getContestProblemSubmission,
  createContestProblem,
  createContestProblemSubmission,
  createContestProblemSumbissionCheck,
};
