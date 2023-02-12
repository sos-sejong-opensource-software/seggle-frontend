import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { editClass } from '../../api';

type useEditClassProps = { classId: string; payload: ClassRequest };

export const useEditClassMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, useEditClassProps>
) => {
  return useMutation(({ classId, payload }) => editClass({ classId, payload }), {
    ...options,
  });
};
