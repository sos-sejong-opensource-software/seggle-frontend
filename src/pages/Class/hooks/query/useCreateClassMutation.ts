import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { createClass } from '../../api';

export const useCreateClassListMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, ClassRequest>
) => {
  return useMutation((payload) => createClass(payload), {
    ...options,
  });
};
