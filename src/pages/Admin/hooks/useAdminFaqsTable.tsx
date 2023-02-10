import { useNavigate } from 'react-router-dom';
import { Button } from '@/components';
import { PATH } from '@/constants/paths';
import React from 'react';
import { useAdminFaqListQuery, useDeleteFaqMutation, useEditFaqVisibleMutation } from './query';
import { formatTime } from '@/utils/time';
import { Switch } from '@/components/atom/Switch';

export const useAdminFaqsTable = (keyword: string) => {
  const navigate = useNavigate();
  const { mutate: deleteFaq } = useDeleteFaqMutation();
  const { mutate: editFaqSwitch } = useEditFaqVisibleMutation();

  const handleDeleteButtonClick = ({
    id,
    question,
    e,
  }: {
    question: string;
    id: number;
    e: React.MouseEvent<HTMLElement>;
  }) => {
    e.stopPropagation();
    const isConfirmed = confirm(`${question}을 삭제하시겠습니까?`);
    if (isConfirmed) deleteFaq(`${id}`);
  };

  const handleSwitchButtonClick = ({ id, visible }: { id: number; visible: boolean }) => {
    editFaqSwitch({ faqId: String(id), payload: { visible } });
  };

  const column = [
    { Header: '#', accessor: 'id' },
    { Header: '질문', accessor: 'question' },
    { Header: '작성일', accessor: 'created_time' },
    { Header: '마지막 수정일', accessor: 'last_modified' },
    { Header: '공개', accessor: 'visible' },
    { Header: '편집', accessor: 'edit' },
    { Header: '삭제', accessor: 'delete' },
  ];

  const {
    data: { results },
  } = useAdminFaqListQuery(keyword);

  const data = results
    .sort(({ id: prev }, { id: next }) => next - prev)
    .map((_faq) => {
      const { id, question, visible } = _faq;
      const created_time = formatTime(_faq.created_time);
      const last_modified = formatTime(_faq.last_modified);

      return {
        ..._faq,
        created_time,
        last_modified,
        visible: (
          <Switch
            key={`${id}_visible_${String(visible)}`}
            enabled={visible}
            onClick={() => {
              handleSwitchButtonClick({ id, visible });
            }}
          />
        ),
        edit: (
          <Button
            onClick={() => {
              navigate(`${PATH.ADMIN}/${PATH.ADMIN_FAQS}/${id}/edit`);
            }}
          >
            편집
          </Button>
        ),
        delete: <Button onClick={(e) => handleDeleteButtonClick({ id, question, e })}>삭제</Button>,
      };
    });

  return { column, data };
};
