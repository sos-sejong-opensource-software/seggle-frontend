import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';
import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { getClasses } from '../../api';

export const useAdminClassListQuery = (
  keyword: string,
  currentPage: number,
  options?: UseQueryOptions<
    AdminClassListResponse,
    AxiosError,
    AdminClassListResponse,
    [string, string, number]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.ADMIN_CLASS_LIST, keyword, currentPage],
    async ({ queryKey: [, keyword, currentPage] }) => {
      const { data } = await getClasses(keyword, currentPage);
      return data;
    },
    {
      ...options,
    }
  );
};
