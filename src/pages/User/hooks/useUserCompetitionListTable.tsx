import { useNavigate } from 'react-router-dom';

import { formatTime } from '@/utils/time';
import { PATH } from '@/constants';

import { useUserCompetitionListQuery } from './query';

export const useUserCompetitionListTable = () => {
  const navigate = useNavigate();

  const column = [
    { Header: '#', accessor: 'id' },
    { Header: '대회 제목', accessor: 'title' },
    { Header: '시작 날짜', accessor: 'startTime' },
    { Header: '종료 날짜', accessor: 'endTime' },
    { Header: '등수', accessor: 'rank' },
  ];
  /** FIXME: username 변경 */
  const {
    data: { results: competitionList },
  } = useUserCompetitionListQuery('seggle');
  const data = competitionList.map((competition) => {
    const { start_time, end_time } = competition;
    return {
      ...competition,
      startTime: formatTime(start_time),
      endTime: formatTime(end_time),
    };
  });

  const onRowClick = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    id: number | string
  ) => {
    navigate(`${PATH.COMPETITION}/${id}`);
  };
  return { column, data, onRowClick };
};
