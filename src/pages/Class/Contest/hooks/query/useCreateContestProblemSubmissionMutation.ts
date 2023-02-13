import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { createContestProblemSubmission } from '../../api';

type createContestProblemSubmissionRequest = {
  classId: string;
  contestId: string;
  contestProblemId: string;
  payload: FormData;
};

export const useCreateContestProblemSubmissionMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, createContestProblemSubmissionRequest>
) => {
  return useMutation((payload) => createContestProblemSubmission(payload), {
    ...options,
    onSuccess: () => {
      alert('성공');
    },
  });
};
