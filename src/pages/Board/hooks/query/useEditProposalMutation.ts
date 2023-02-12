import { useMutation, UseMutationOptions } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { editProposal } from '../../api';

export const useEditProposalMutation = (
  proposalId: string,
  options?: UseMutationOptions<AxiosResponse, AxiosError, FormData>
) => {
  return useMutation((payload) => editProposal(proposalId, payload), {
    ...options,
    onSuccess: () => {
      alert('편집 완료');
    },
  });
};
