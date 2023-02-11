import { Button } from '@/components';
import React, { useState } from 'react';
import { useAdminUserListQuery, useDeleteUserMutation } from '../hooks/query';
import { formatTime } from '@/utils/time';
import { PRIVILEGE } from '@/constants';

export const useAdminUserTable = (keyword: string) => {
  const { mutate: deleteFaq } = useDeleteUserMutation();
  const [showModal, setShowModal] = useState(false);
  const [username, setUserName] = useState('');

  const handleDeleteButtonClick = ({
    username,
    e,
  }: {
    username: string;
    e: React.MouseEvent<HTMLElement>;
  }) => {
    e.stopPropagation();
    const isConfirmed = confirm(`${username}을 삭제하시겠습니까?`);
    if (isConfirmed) deleteFaq(username);
  };

  const handleEditButtonClick = (username: string) => {
    setShowModal(true);
    setUserName(username);
  };

  const column = [
    { Header: '#', accessor: 'id' },
    { Header: 'ID', accessor: 'username' },
    { Header: '이름', accessor: 'name' },
    { Header: '이메일', accessor: 'email' },
    { Header: '가입날짜', accessor: 'date_joined' },
    { Header: '권한', accessor: 'privilege' },
    { Header: '편집', accessor: 'edit' },
    { Header: '삭제', accessor: 'delete' },
  ];

  const {
    data: { results },
  } = useAdminUserListQuery(keyword);

  const data = results.map((_user) => {
    const { username } = _user;
    const date_joined = formatTime(_user.date_joined);
    const privilege = PRIVILEGE[+_user.privilege as PrivilegeNumber];

    return {
      ..._user,
      date_joined,
      privilege,
      edit: <Button onClick={() => handleEditButtonClick(username)}>편집</Button>,
      delete: <Button onClick={(e) => handleDeleteButtonClick({ username, e })}>삭제</Button>,
    };
  });

  return {
    column,
    data,
    modalProps: {
      username,
      showModal,
      setShowModal,
    },
  };
};
