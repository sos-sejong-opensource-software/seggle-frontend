import { QueryKey, UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';
import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';

import { getClassStudentList } from '../../api';

export const useClassStudentListQuery = (
  classId: QueryKey,
  options?: UseQueryOptions<
    ClassStudentListResponse,
    AxiosError,
    ClassStudentListResponse,
    QueryKey[]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.CLASS_STUDENT, classId],
    async ({ queryKey: [, classId] }) => {
      const { data } = await getClassStudentList(String(classId));
      return data;
    },
    {
      ...options,
    }
  );
};
