import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { createContest } from '../../api';

type useCreateContestProps = { classId: string; payload: ContestRequest };

export const useCreateContestMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, useCreateContestProps>
) => {
  return useMutation(({ classId, payload }) => createContest({ classId, payload }), {
    ...options,
  });
};
