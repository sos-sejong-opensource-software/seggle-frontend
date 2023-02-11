import { useNavigate } from 'react-router-dom';

import { Button, Switch } from '@/components';
import { formatTime } from '@/utils/time';

import {
  useEditProblemPublicMutation,
  useDeleteProblemMutation,
  useAllProblemListQuery,
} from './query';

export const useAllProblemListTable = (keyword: string) => {
  const navigate = useNavigate();

  const column = [
    { Header: '#', accessor: 'id' },
    { Header: '제목', accessor: 'title' },
    { Header: '작성일', accessor: 'created_time' },
    { Header: '작성자', accessor: 'created_user' },
    { Header: '공개', accessor: 'public' },
    { Header: '삭제', accessor: 'delete' },
  ];

  const { mutate: editProblemPublic } = useEditProblemPublicMutation();

  const handleEditButtonClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();

    editProblemPublic(`${id}`);
  };

  const { mutate: deleteProblem } = useDeleteProblemMutation();

  const handleDeleteButtonClick = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.stopPropagation();

    const isConfirmed = confirm(`삭제하시겠습니까?`);
    if (isConfirmed) deleteProblem(`${id}`);
  };

  const {
    data: { results },
  } = useAllProblemListQuery({ keyword });
  const data = results
    .sort(({ created_time: prev }, { created_time: next }) => +new Date(next) - +new Date(prev))
    .map((problem) => {
      const { id, created_time: createdTime, public: isPublic } = problem;
      return {
        ...problem,
        created_time: formatTime(createdTime),
        public: (
          <Switch
            key={`${id}_public_${String(isPublic)}`}
            enabled={isPublic}
            onClick={(e) => handleEditButtonClick(e, id)}
          />
        ),
        delete: <Button onClick={(e) => handleDeleteButtonClick(e, id)}>삭제</Button>,
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
    handleRowClick,
  };
};
