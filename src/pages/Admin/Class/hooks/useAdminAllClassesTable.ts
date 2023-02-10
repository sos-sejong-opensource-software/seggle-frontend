import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/paths';
import React from 'react';
import { useAdminAllClassesQuery } from '../hooks/query';

export const useAdminAllClassesTable = (keyword: string) => {
  const navigate = useNavigate();

  const handleRowClick = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    id: number | string
  ) => {
    navigate(`${PATH.CLASS}/${id}/contest`);
  };

  const column = [
    { Header: '#', accessor: 'id' },
    { Header: '연도', accessor: 'year' },
    { Header: '학기', accessor: 'semester' },
    { Header: '수업이름', accessor: 'name' },
    { Header: '수업 생성자', accessor: 'created_user' },
  ];

  const {
    data: { results },
  } = useAdminAllClassesQuery(keyword);

  const data = results;

  return { column, data, handleRowClick };
};
