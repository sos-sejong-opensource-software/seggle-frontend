import { QueryKey, UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';
import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';

import { getClass } from '../../api';

export const useClassQuery = (
  classId: QueryKey,
  options?: UseQueryOptions<ClassResponse, AxiosError, ClassResponse, QueryKey[]>
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.CLASS, classId],
    async ({ queryKey: [, classId] }) => {
      const { data } = await getClass(String(classId));
      return data;
    },
    {
      ...options,
    }
  );
};
