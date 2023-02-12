import { useNavigate } from 'react-router-dom';
import { Button } from '@/components';
import { useDeleteProblemMutation } from './query/useDeleteProblemMutation';
import { PATH } from '@/constants/paths';
import React from 'react';
import { useAdminProblemListQuery } from './query';

export const useAdminProblemListTable = (keyword: string, currentPage: number) => {
  const navigate = useNavigate();
  const { mutate: deleteProblem } = useDeleteProblemMutation();

  const handleDeleteButtonClick = ({
    id,
    title,
    e,
  }: {
    title: string;
    id: number;
    e: React.MouseEvent<HTMLElement>;
  }) => {
    e.stopPropagation();
    const isConfirmed = confirm(`${title}을 삭제하시겠습니까?`);
    if (isConfirmed) deleteProblem(`${id}`);
  };

  const handleRowClick = (
    e: React.MouseEvent<HTMLTableRowElement, MouseEvent>,
    id: number | string
  ) => {
    navigate(`${PATH.ADMIN_PROBLEM_LIST}/${id}`);
  };

  const column = [
    { Header: '#', accessor: 'id' },
    { Header: '제목', accessor: 'title' },
    { Header: '작성일', accessor: 'created_time' },
    { Header: '작성자', accessor: 'created_user' },
    { Header: '삭제', accessor: 'delete' },
  ];

  const {
    data: { results, current_page, last_page },
  } = useAdminProblemListQuery(keyword, currentPage);

  const data = results.map((_problem) => {
    const { id, title } = _problem;
    const created_time = new Date(_problem.created_time).toISOString().split('T')[0];
    return {
      ..._problem,
      created_time,
      delete: <Button onClick={(e) => handleDeleteButtonClick({ id, title, e })}>삭제</Button>,
    };
  });

  return { column, data, handleRowClick, page: { currentPage: current_page, lastPage: last_page } };
};
