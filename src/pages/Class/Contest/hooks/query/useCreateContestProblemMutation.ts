import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

import { createContestProblem } from '../../api';

export const useCreateContestProblemMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, FormData>
) => {
  const navigate = useNavigate();
  return useMutation((payload) => createContestProblem(payload), {
    ...options,
    onSuccess: () => {
      navigate(-1);
    },
  });
};
