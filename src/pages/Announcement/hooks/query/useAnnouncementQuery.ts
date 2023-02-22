import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { QUERY_KEYS } from '@/constants';

import { getAnnouncement } from '../../api';

export const useAnnouncementQuery = (
  currentPage: number,
  options?: UseQueryOptions<
    AnnouncementResponse,
    AxiosError,
    AnnouncementResponse,
    [string, number]
  >
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.ANNOUNCEMENT, currentPage],
    async ({ queryKey: [, currentPage] }) => {
      const { data } = await getAnnouncement(currentPage);
      return data;
    },
    {
      ...options,
    }
  );
};
