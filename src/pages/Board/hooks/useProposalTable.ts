import { useProposalQuery } from '../hooks/query';
import { formatTime } from '../../../utils/time';

export const useProposal = (currentPage: number) => {
  /** TODO: 성공, 에러 처리 추가 필요 */
  const {
    data: { results, current_page, last_page },
  } = useProposalQuery(currentPage);
  const data = results
    .sort(({ created_time: prev }, { created_time: next }) => +new Date(prev) - +new Date(next))
    .map(({ id, title, created_user }) => ({ id, title, created_user }));

  return { data, page: { currentPage: current_page, lastPage: last_page } };
};
