import { UseQueryOptions, QueryKey } from 'react-query';
import { AxiosError } from 'axios';

import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { QUERY_KEYS } from '@/constants';

import { getAnnouncementDetail } from '../../api';

export const useAnnouncementDetailQuery = (
  announcementId: QueryKey,
  options?: UseQueryOptions<AnnouncementDetail, AxiosError, AnnouncementDetail, QueryKey[]>
) => {
  return useSuspenseQuery(
    [QUERY_KEYS.ANNOUNCEMENT_DETAIL, announcementId],
    async ({ queryKey: [, announcementId] }) => {
      const { data } = await getAnnouncementDetail(String(announcementId));
      return data;
    },
    {
      ...options,
    }
  );
};
