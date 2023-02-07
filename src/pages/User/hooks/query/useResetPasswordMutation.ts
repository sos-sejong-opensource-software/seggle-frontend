import { PATH } from '@/constants';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../../api';

export const useResetPasswordMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, ResetPasswordRequest>
) => {
  const navigate = useNavigate();
  return useMutation((password) => resetPassword(password), {
    ...options,
    onSuccess: () => {
      navigate(PATH.USER_HOME);
    },
  });
};
