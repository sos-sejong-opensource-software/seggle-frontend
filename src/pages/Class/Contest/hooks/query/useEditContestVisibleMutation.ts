import { AxiosError, AxiosResponse } from 'axios';
import { useQueryClient, useMutation, UseMutationOptions } from 'react-query';

import { QUERY_KEYS } from '@/constants';
import { editContestVisible } from '../../api';

type useEditContestVisibleProps = {
  classId: string;
  contestId: string;
};

export const useEditContestVisibleMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, useEditContestVisibleProps>
) => {
  const queryClient = useQueryClient();

  return useMutation(({ classId, contestId }) => editContestVisible(classId, contestId), {
    ...options,
    onSuccess: async () => {
      await queryClient.invalidateQueries(QUERY_KEYS.CLASS_CONTEST);
    },
  });
};
