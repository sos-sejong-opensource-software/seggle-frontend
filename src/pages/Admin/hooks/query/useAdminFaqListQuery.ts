import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { QUERY_KEYS } from '@/constants';
import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';

import { getFaqs } from '../../api';

export const useAdminFaqListQuery = (
  options?: UseQueryOptions<AdminFaqListResponse, AxiosError, AdminFaqListResponse, string>
) => {
  return useSuspenseQuery(
    QUERY_KEYS.ADMIN_ALL_FAQS,
    async () => {
      const { data } = await getFaqs();
      return data;
    },
    {
      ...options,
    }
  );
};
