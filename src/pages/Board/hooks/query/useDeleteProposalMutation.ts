import { AxiosError, AxiosResponse } from 'axios';
import { useMutation, UseMutationOptions } from 'react-query';

import { deleteProposal } from '../../api';

export const useDeleteProposalMutation = (
  options?: UseMutationOptions<AxiosResponse, AxiosError, string>
) => {
  return useMutation((proposalId) => deleteProposal(proposalId), {
    ...options,
    onSuccess: () => {
      alert('삭제되었습니다.');
    },
  });
};
