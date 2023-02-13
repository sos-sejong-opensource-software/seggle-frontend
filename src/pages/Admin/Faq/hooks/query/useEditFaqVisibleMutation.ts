import { QUERY_KEYS } from '@/constants';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions, useQueryClient } from 'react-query';
import { editFaqVisible } from '../../api';

type useEditFaqVisibleProps = {
  id: number;
};

export const useEditFaqVisibleMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, useEditFaqVisibleProps>
) => {
  const queryClient = useQueryClient();

  return useMutation((payload) => editFaqVisible(payload), {
    ...options,
    onSuccess: async () => {
      await queryClient.invalidateQueries(QUERY_KEYS.ADMIN_ALL_FAQS);
    },
  });
};
