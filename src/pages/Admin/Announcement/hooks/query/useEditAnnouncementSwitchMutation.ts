import { QUERY_KEYS } from '@/constants';
import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions, useQueryClient } from 'react-query';
import { editAnnouncementSwitch } from '../../api';

type useEditAnnouncementSwitchProps = {
  announcementId: string;
  payload: EditAnnouncementSwitchRequest;
};

export const useEditAnnouncementSwitchMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, useEditAnnouncementSwitchProps>
) => {
  const queryClient = useQueryClient();

  return useMutation(
    ({ announcementId, payload }) => editAnnouncementSwitch({ announcementId, payload }),
    {
      ...options,
      onSuccess: async () => {
        await queryClient.invalidateQueries(QUERY_KEYS.ADMIN_ANNOUNCEMENT_LIST);
      },
    }
  );
};
