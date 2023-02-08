import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions, useQueryClient } from 'react-query';

import { QUERY_KEYS } from '@/constants/queryKeys';

import { createContest } from '../../api';

type useCreateContestProps = { classId: string; payload: ContestRequest };

export const useCreateContestMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, useCreateContestProps>
) => {
  const queryClient = useQueryClient();
  return useMutation(({ classId, payload }) => createContest({ classId, payload }), {
    ...options,
    onSuccess: async () => {
      await queryClient.invalidateQueries(QUERY_KEYS.CLASS_CONTEST);
    },
  });
};
