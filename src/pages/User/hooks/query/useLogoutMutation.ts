import { useNavigate } from 'react-router-dom';
import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { PATH } from '@/constants';

import { logoutUser } from '../../api';
import { useUsername } from '@/hooks/useUsername';

export const useLogoutMutation = (options?: UseMutationOptions<AxiosResponse, AxiosError>) => {
  const { removeUsername } = useUsername();
  const navigate = useNavigate();

  return useMutation(logoutUser, {
    ...options,
    onSuccess: () => {
      removeUsername();

      navigate(PATH.HOME);
    },
  });
};
