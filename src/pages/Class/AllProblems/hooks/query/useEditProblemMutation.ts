import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { editProblem } from '../../api';

export const useEditProblemMutation = (
  problemId: string,
  options?: UseMutationOptions<AxiosResponse, AxiosError, FormData>
) => {
  return useMutation((payload) => editProblem(problemId, payload), {
    ...options,
    onSuccess: () => {
      alert('편집 완료');
    },
  });
};
