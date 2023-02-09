import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { createProblem } from '../../api';

export const useCreateProblemMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, FormData>
) => {
  return useMutation((payload) => createProblem(payload), {
    ...options,
  });
};
