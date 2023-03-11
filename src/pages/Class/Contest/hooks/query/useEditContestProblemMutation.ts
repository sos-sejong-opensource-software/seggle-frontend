import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { editContestProblem } from '../../api';

export const useEditContestProblemMutation = (
  classId: string,
  contestId: string,
  contestProblemId: string,
  options?: UseMutationOptions<AxiosResponse, AxiosError, FormData>
) => {
  return useMutation(
    (payload) => editContestProblem({ classId, contestId, contestProblemId, payload }),
    {
      ...options,
      onSuccess: () => {
        alert('편집 완료');
      },
    }
  );
};
