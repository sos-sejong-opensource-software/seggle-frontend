import { PATH } from '@/constants';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { createFaq } from '../../api';

export const useCreateFaqMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, CreateEditFaqRequest>
) => {
  const navigate = useNavigate();

  return useMutation((payload) => createFaq(payload), {
    ...options,
    onSuccess: () => {
      alert('생성되었습니다.');
      navigate(`${PATH.ADMIN}/${PATH.ADMIN_FAQS}`);
    },
  });
};
