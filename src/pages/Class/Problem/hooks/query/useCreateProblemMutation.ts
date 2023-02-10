import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

import { createProblem } from '../../api';

export const useCreateProblemMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, FormData>
) => {
  const navigate = useNavigate();
  return useMutation((payload) => createProblem(payload), {
    ...options,
    onSuccess: () => {
      navigate(-1);
    },
  });
};
