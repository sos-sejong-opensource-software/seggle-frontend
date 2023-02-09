import { QueryKey, UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';
import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';

import { getClassTaList } from '../../api';

export const useClassTaListQuery = (
  classId: QueryKey,
  options?: UseQueryOptions<
    ClassStudentListResponse,
    AxiosError,
    ClassStudentListResponse,
    QueryKey[]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.CLASS_TA, classId],
    async ({ queryKey: [, classId] }) => {
      const { data } = await getClassTaList(String(classId));
      return data;
    },
    {
      ...options,
    }
  );
};
