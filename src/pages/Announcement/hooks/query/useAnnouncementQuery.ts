import { UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';

import { useSuspenseQuery } from '@/hooks/useSuspenseQuery';
import { QUERY_KEYS } from '@/constants';

import { getAnnouncement } from '../../api';

export const useAnnouncementQuery = (
  options?: UseQueryOptions<AnnouncementResponse, AxiosError, AnnouncementResponse, string>
) => {
  return useSuspenseQuery(
    QUERY_KEYS.ANNOUNCEMENT,
    async () => {
      const { data } = await getAnnouncement();
      return data;
    },
    {
      ...options,
    }
  );
};
