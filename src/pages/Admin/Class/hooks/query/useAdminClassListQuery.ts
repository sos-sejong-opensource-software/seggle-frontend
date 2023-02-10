import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';
import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { getClasses } from '../../api';

export const useAdminClassListQuery = (
  keyword: string,
  options?: UseQueryOptions<
    AdminClassListResponse,
    AxiosError,
    AdminClassListResponse,
    [string, string]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.ADMIN_CLASS_LIST, keyword],
    async ({ queryKey: [, keyword] }) => {
      const { data } = await getClasses(keyword);
      return data;
    },
    {
      ...options,
    }
  );
};
