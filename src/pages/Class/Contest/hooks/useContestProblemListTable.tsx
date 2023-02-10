import { useNavigate } from 'react-router-dom';

import { Button } from '@/components';
import { formatTime } from '@/utils/time';

import { useClassContestProblemListQuery } from './query';
import { useDeleteProblemMutation } from '../../Problem/hooks';

export const useContestProblemListTable = (classId: string, contestId: string) => {
  const navigate = useNavigate();

  const column = [
    { Header: '#', accessor: 'id' },
    { Header: '제목', accessor: 'title' },
    { Header: '마감기한', accessor: 'endTime' },
    { Header: '편집', accessor: 'edit' },
    { Header: '삭제', accessor: 'delete' },
  ];

  const handleEditButtonClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();
    navigate(`${id}/edit`);
  };

  const { mutate: deleteProblem } = useDeleteProblemMutation();
  const handleDeleteButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number,
    title: string
  ) => {
    e.stopPropagation();
    const isConfirmed = confirm(`${title}을 삭제하시겠습니까?`);
    if (isConfirmed) deleteProblem(`${id}`);
  };

  const {
    data: { results },
  } = useClassContestProblemListQuery(classId, contestId);
  const data = results.map((problem) => {
    const { problem_id, title, end_time } = problem;
    return {
      ...problem,
      endTime: formatTime(end_time),
      edit: <Button onClick={(e) => handleEditButtonClick(e, problem_id)}>편집</Button>,
      delete: <Button onClick={(e) => handleDeleteButtonClick(e, problem_id, title)}>삭제</Button>,
    };
  });

  const handleRowClick = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    id: number | string
  ) => {
    navigate(`${id}`);
  };

  return {
    column,
    data,
    onRowClick: handleRowClick,
  };
};
