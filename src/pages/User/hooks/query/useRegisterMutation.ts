import { useNavigate } from 'react-router-dom';
import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { PATH } from '@/constants';

import { registerUser } from '../../api';

export const useRegisterMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, RegisterRequest>
) => {
  const navigate = useNavigate();

  return useMutation((user) => registerUser(user), {
    ...options,
    onSuccess: () => {
      navigate(PATH.LOGIN);
    },
  });
};
