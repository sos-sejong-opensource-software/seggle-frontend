import { useProposalQuery } from '../hooks/query';
import { formatTime } from "../../../utils/time";

export const useProposal = () => {
  /** TODO: 성공, 에러 처리 추가 필요 */
  const { data } = useProposalQuery();
  return data.results
  .sort(({ created_time: prev }, { created_time: next }) => +new Date(prev) - +new Date(next))
  .map(({ id, title, created_user }) => ({ id, title, created_user }))
};