import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';
import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';

import { getFaqs } from '../../api';

export const useAdminFaqListQuery = (
  keyword: string,
  options?: UseQueryOptions<
    AdminFaqListResponse,
    AxiosError,
    AdminFaqListResponse,
    [string, string]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.ADMIN_ALL_FAQS, keyword],
    async ({ queryKey: [, keyword] }) => {
      const { data } = await getFaqs(keyword);
      return data;
    },
    {
      ...options,
    }
  );
};
