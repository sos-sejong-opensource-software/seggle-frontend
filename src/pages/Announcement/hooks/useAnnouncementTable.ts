import { useAnnouncementQuery } from '../hooks/query';
import { formatTime } from '../../../utils/time';

export const useAnnouncement = (currentPage: number) => {
  /** TODO: 성공, 에러 처리 추가 필요 */
  const {
    data: { results, current_page, last_page },
  } = useAnnouncementQuery(currentPage);
  const data = results
    ?.sort(({ created_time: prev }, { created_time: next }) => +new Date(prev) - +new Date(next))
    .filter(({ visible }) => visible)
    .map(({ id, title, important }) => ({ id, title, important }));

  return { data, page: { currentPage: current_page, lastPage: last_page } };
};
