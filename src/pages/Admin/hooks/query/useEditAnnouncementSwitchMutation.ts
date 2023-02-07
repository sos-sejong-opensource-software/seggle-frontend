import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';
import { editAnnouncementSwitch } from '../../api';

type useEditAnnouncementSwitchProps = {
  announcementId: string;
  payload: EditAnnouncementSwitchRequest;
};

export const useEditAnnouncementSwitchMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, useEditAnnouncementSwitchProps>
) => {
  return useMutation(
    ({ announcementId, payload }) => editAnnouncementSwitch({ announcementId, payload }),
    {
      ...options,
    }
  );
};
