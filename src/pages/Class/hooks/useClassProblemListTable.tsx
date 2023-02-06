import { useNavigate } from 'react-router-dom';

import { Button, Switch } from '@/components';
import { formatTime } from '@/utils/time';

import { useProblemListQuery } from './query';

export const useClassProblemListTable = (keyword: string) => {
  const navigate = useNavigate();

  const column = [
    { Header: '#', accessor: 'id' },
    { Header: '제목', accessor: 'title' },
    { Header: '작성일', accessor: 'created_time' },
    { Header: '작성자', accessor: 'created_user' },
    { Header: '공개', accessor: 'public' },
    { Header: '삭제', accessor: 'delete' },
  ];

  const {
    data: { results },
  } = useProblemListQuery({ keyword });
  const data = results
    .sort(({ created_time: prev }, { created_time: next }) => +new Date(next) - +new Date(prev))
    .map((problem) => {
      const { created_time: createdTime, public: isPublic } = problem;
      return {
        ...problem,
        created_time: formatTime(createdTime),
        public: <Switch enabled={isPublic} />,
        delete: <Button>삭제</Button>,
      };
    });

  const handleRowClick = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    id: number | string
  ) => {
    navigate(`../${id}`);
  };

  return {
    column,
    data,
    handleRowClick,
  };
};
