import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

import { deleteProblem } from '../../api';

export const useDeleteProblemMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, string>
) => {
  return useMutation((problemId) => deleteProblem(problemId), {
    ...options,
  });
};
