import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { deleteFaq } from '../../api';

export const useDeleteFaqMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, string>
) => {
  return useMutation((faqId) => deleteFaq(faqId), {
    ...options,
    onSuccess: () => {
      alert('삭제되었습니다.');
    },
  });
};
