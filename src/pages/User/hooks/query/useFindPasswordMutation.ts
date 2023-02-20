import { PATH } from '@/constants';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { findPassword } from '../../api';

export const useFindPasswordMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, FindPasswordRequest>
) => {
  const navigate = useNavigate();
  return useMutation((email) => findPassword(email), {
    ...options,
    onSuccess: () => {
      navigate(PATH.USER_HOME);
    },
  });
};
