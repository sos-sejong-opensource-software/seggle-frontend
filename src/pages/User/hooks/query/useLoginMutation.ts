import { useNavigate } from 'react-router-dom';
import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { PATH } from '@/constants';

import { loginUser } from '../../api';
import { useUsername } from '@/hooks/useUsername';

export const useLoginMutation = (
  options?: UseMutationOptions<AxiosResponse<LoginResponse>, AxiosError, User>
) => {
  const { setUsername } = useUsername();
  const navigate = useNavigate();

  return useMutation((user) => loginUser(user), {
    ...options,
    onSuccess: ({ data: { username } }) => {
      setUsername(username);
      navigate(PATH.HOME);
    },
  });
};
