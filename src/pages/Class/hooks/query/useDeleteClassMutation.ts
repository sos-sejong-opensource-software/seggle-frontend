import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { deleteClass } from '../../api';

export const useDeleteClassMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, string>
) => {
  return useMutation((classId) => deleteClass(classId), {
    ...options,
  });
};
