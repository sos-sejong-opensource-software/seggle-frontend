import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { AuthContext } from '@/contexts';
import { STORAGE, PATH } from '@/constants';

import { loginUser } from '../../api';

export const useLoginMutation = (
  options?: UseMutationOptions<AxiosResponse<LoginResponse>, AxiosError, User>
) => {
  const { setIsLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  return useMutation((user) => loginUser(user), {
    ...options,
    onSuccess: ({ data: { refresh } }) => {
      localStorage.setItem(STORAGE.REFRESH_TOKEN, refresh);

      setIsLogin(true);

      navigate(PATH.HOME);
    },
  });
};
