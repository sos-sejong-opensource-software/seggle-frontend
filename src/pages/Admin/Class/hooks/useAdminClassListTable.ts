import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/paths';
import React from 'react';
import { useAdminClassListQuery } from './query';

export const useAdminClassListTable = (keyword: string, currentPage: number) => {
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
    data: { results, current_page, last_page },
  } = useAdminClassListQuery(keyword, currentPage);

  const data = results;

  return { column, data, handleRowClick, page: { currentPage: current_page, lastPage: last_page } };
};
