import { QUERY_KEYS } from '@/constants';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions, useQueryClient } from 'react-query';
import { editFaqVisible } from '../../api';

type useEditFaqVisibleProps = {
  faqId: string;
  payload: { visible: boolean };
};

export const useEditFaqVisibleMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, useEditFaqVisibleProps>
) => {
  const queryClient = useQueryClient();

  return useMutation(({ faqId, payload }) => editFaqVisible({ faqId, payload }), {
    ...options,
    onSuccess: async () => {
      await queryClient.invalidateQueries(QUERY_KEYS.ADMIN_ALL_FAQS);
    },
  });
};
