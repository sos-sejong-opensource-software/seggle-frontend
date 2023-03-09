import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

import { deleteContestProblem } from '../../api';

type useDeleteContestProblemProps = {
  classId: string;
  contestId: string;
  contestProblemId: string;
};
export const useDeleteContestProblemMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, useDeleteContestProblemProps>
) => {
  return useMutation(
    ({ classId, contestId, contestProblemId }) =>
      deleteContestProblem({ classId, contestId, contestProblemId }),
    {
      ...options,
    }
  );
};
