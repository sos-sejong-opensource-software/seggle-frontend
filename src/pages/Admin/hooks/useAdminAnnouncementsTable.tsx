import { useNavigate } from 'react-router-dom';
import { Button } from '@/components';
import { PATH } from '@/constants/paths';
import React from 'react';
import {
  useAdminAnnouncementListQuery,
  useDeleteAnnouncementMutation,
  useEditAnnouncementSwitchMutation,
} from './query';
import { formatTime } from '@/utils/time';
import { Switch } from '@/components/atom/Switch';

export const useAdminAnnouncementsTable = (keyword: string) => {
  const navigate = useNavigate();
  const { mutate: deleteAnnouncement } = useDeleteAnnouncementMutation();
  const { mutate: editAnnouncementSwitch } = useEditAnnouncementSwitchMutation();

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
    if (isConfirmed) deleteAnnouncement(`${id}`);
  };

  const handleSwitchButtonClick = ({
    id,
    important,
    visible,
  }: {
    id: number;
    important?: boolean;
    visible?: boolean;
  }) => {
    if (visible !== undefined)
      editAnnouncementSwitch({ announcementId: String(id), payload: { visible } });
    if (important !== undefined)
      editAnnouncementSwitch({ announcementId: String(id), payload: { important } });
  };

  const column = [
    { Header: '#', accessor: 'id' },
    { Header: '제목', accessor: 'title' },
    { Header: '작성일', accessor: 'created_time' },
    { Header: '마지막 수정일', accessor: 'last_modified' },
    { Header: '공개', accessor: 'visible' },
    { Header: '중요', accessor: 'important' },
    { Header: '편집', accessor: 'edit' },
    { Header: '삭제', accessor: 'delete' },
  ];

  const {
    data: { results },
  } = useAdminAnnouncementListQuery(keyword);

  const data = results
    .sort(({ id: prev }, { id: next }) => next - prev)
    .map((_announcement) => {
      const { id, title, visible, important } = _announcement;
      const created_time = formatTime(_announcement.created_time);
      const last_modified = formatTime(_announcement.last_modified);

      return {
        ..._announcement,
        created_time,
        last_modified,
        visible: (
          <Switch
            key={`${id}_visible_${String(visible)}`}
            enabled={visible}
            onClick={() => {
              handleSwitchButtonClick({
                id,
                visible: !visible,
              });
            }}
          />
        ),
        important: (
          <Switch
            key={`${id}_important_${String(important)}`}
            enabled={important}
            onClick={() => {
              handleSwitchButtonClick({
                id,
                important: !important,
              });
            }}
          />
        ),
        edit: (
          <Button
            onClick={() => {
              navigate(`${PATH.ADMIN}/${PATH.ADMIN_ANNOUNCEMENTS}/${id}/edit`);
            }}
          >
            편집
          </Button>
        ),
        delete: <Button onClick={(e) => handleDeleteButtonClick({ id, title, e })}>삭제</Button>,
      };
    });

  return { column, data };
};
