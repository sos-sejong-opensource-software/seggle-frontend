import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { editClassList } from '../../api';

export const useEditClassListMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, ClassListIdRequest>
) => {
  return useMutation((payload) => editClassList(payload), {
    ...options,
  });
};
