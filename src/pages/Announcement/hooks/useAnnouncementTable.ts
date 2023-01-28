import { useAnnouncementQuery } from '../hooks/query';
import { formatTime } from "../../../utils/time";

export const useAnnouncement = () => {
  /** TODO: 성공, 에러 처리 추가 필요 */
  const { data } = useAnnouncementQuery();
  return data?.results
  ?.sort(({ created_time: prev }, { created_time: next }) => +new Date(prev) - +new Date(next))
  .filter(({ visible }) => visible)
  .map(({ id, title, important }) => ({ id, title, important }))
};