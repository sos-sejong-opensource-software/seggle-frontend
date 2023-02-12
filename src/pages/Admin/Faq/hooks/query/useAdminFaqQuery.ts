import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';
import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';

import { getFaqById } from '../../api';

export const useAdminFaqQuery = (
  faqId: string,
  options?: UseQueryOptions<AdminFaqResponse, AxiosError, AdminFaqResponse, [string, string]>
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.ADMIN_FAQ, faqId],
    async ({ queryKey: [, faqId] }) => {
      const { data } = await getFaqById(faqId);
      return data;
    },
    {
      ...options,
    }
  );
};
