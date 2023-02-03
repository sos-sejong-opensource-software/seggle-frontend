import { useNavigate } from 'react-router-dom';

import { PATH } from '@/constants/paths';

import { useClassListQuery } from './query';

export const useClassListTable = () => {
  const navigate = useNavigate();

  const column = [
    { Header: '연도', accessor: 'year' },
    { Header: '학기', accessor: 'semester' },
    { Header: '제목', accessor: 'name' },
  ];

  const {
    data: { results },
  } = useClassListQuery();
  const data = results
    .sort(({ year: prev }, { year: next }) => next - prev)
    .filter(({ is_show }) => is_show);

  const handleRowClick = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    id: number | string
  ) => {
    navigate(`${PATH.CLASS}/${id}`);
  };

  return { column, data, handleRowClick };
};
