import { PATH, QUERY_KEYS } from '@/constants';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { editFaq } from '../../api';

type useEditFaqMutationProps = {
  faqId: string;
  payload: CreateEditFaqRequest;
};

export const useEditFaqMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, useEditFaqMutationProps>
) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(({ faqId, payload }) => editFaq(faqId, payload), {
    ...options,
    onSuccess: async () => {
      await queryClient.invalidateQueries(QUERY_KEYS.ADMIN_FAQ);
      alert('수정되었습니다.');
      navigate(`${PATH.ADMIN}/${PATH.ADMIN_FAQS}`);
    },
  });
};
