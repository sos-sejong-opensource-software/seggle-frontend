import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { createContestProblemSumbissionCheck } from '../../api';

type createContestProblemSumbissionCheck = {
  classId: string;
  contestId: string;
  contestProblemId: string;
  payload: { id: string };
};

export const useCreateContestProblemSubmissionCheckMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, createContestProblemSumbissionCheck>
) => {
  return useMutation((payload) => createContestProblemSumbissionCheck(payload), {
    ...options,
    onSuccess: () => {
      alert('성공');
    },
  });
};
