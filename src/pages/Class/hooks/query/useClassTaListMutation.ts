import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { createClassTaList } from '../../api';

type useCreateTatListProps = { classId: string; payload: ClassStudentRequest };

export const useCreateTaListMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, useCreateTatListProps>
) => {
  return useMutation(({ classId, payload }) => createClassTaList({ classId, payload }), {
    ...options,
  });
};
