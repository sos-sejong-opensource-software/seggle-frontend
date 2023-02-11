import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions, useQueryClient } from 'react-query';

import { QUERY_KEYS } from '@/constants';

import { editProblemPublic } from '../../api';

export const useEditProblemPublicMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, string>
) => {
  const queryClient = useQueryClient();
  return useMutation((problemId) => editProblemPublic(problemId), {
    ...options,
    onSuccess: async () => {
      await queryClient.invalidateQueries(QUERY_KEYS.CLASS_PROBLEM);
    },
  });
};
