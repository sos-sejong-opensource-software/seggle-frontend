import { AuthContext } from '@/contexts';
import { STORAGE, PATH } from '@/constants';

import { AxiosError, AxiosResponse } from 'axios';

import { useContext } from 'react';
import { useMutation, UseMutationOptions } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { resignUser } from '../../api';

export const useResignMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, ResignUserRequest>
) => {
  const { setIsLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  return useMutation(() => resignUser(), {
    ...options,
    onSuccess: () => {
      localStorage.removeItem(STORAGE.REFRESH_TOKEN);

      setIsLogin(false);

      navigate(PATH.HOME);
    },
  });
};
