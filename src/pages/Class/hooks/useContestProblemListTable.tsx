import { useNavigate } from 'react-router-dom';

import { Button } from '@/components';

import { useClassContestProblemListQuery } from './query';
import { formatTime } from '@/utils/time';

export const useContestProblemListTable = (classId: string, contestId: string) => {
  const navigate = useNavigate();

  const column = [
    { Header: '#', accessor: 'id' },
    { Header: '제목', accessor: 'title' },
    { Header: '마감기한', accessor: 'endTime' },
    { Header: '편집', accessor: 'edit' },
    { Header: '삭제', accessor: 'delete' },
  ];

  const {
    data: { results },
  } = useClassContestProblemListQuery(classId, contestId);
  const data = results.map((problem) => ({
    ...problem,
    endTime: formatTime(problem.end_time),
    edit: <Button>편집</Button>,
    delete: <Button>삭제</Button>,
  }));

  const handleRowClick = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    id: number | string
  ) => {
    /** FIXME: 해당 문제 상세 페이지로 이동하게 수정 */
    navigate(`${id}`);
  };

  return {
    column,
    data,
    onRowClick: handleRowClick,
  };
};
