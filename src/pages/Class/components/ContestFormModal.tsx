import { useState } from 'react';

import { Button, Label, Modal, Input, Switch } from '@/components';
import { StateAndAction } from '@/types/state';

import { useCreateContestMutation } from '../hooks';
import { useParams } from 'react-router-dom';

type ContestFormModal<T extends React.ElementType> = Component<T> &
  StateAndAction<boolean, 'showModal'>;

export function ContestFormModal({ showModal, setShowModal }: ContestFormModal<'div'>) {
  const { classId } = useParams() as { classId: string };

  const [isExam, setIsExam] = useState(false);
  const [visible, setVisible] = useState(false);

  const { mutate: createContest } = useCreateContestMutation();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    e.preventDefault();

    const [name, startTime, endTime] = Object.values(e.target).map(({ value }) => value);

    createContest({
      classId,
      payload: {
        name,
        start_time: startTime,
        end_time: endTime,
        is_exam: isExam,
        visible,
      },
    });
  };

  const handleCloseButtonClick = () => {
    setShowModal(false);
  };

  return (
    <Modal open={showModal}>
      <Modal.Header>과제 및 시험 목록 생성</Modal.Header>
      <form onSubmit={handleFormSubmit}>
        <Modal.Body className="w-[300px] flex flex-col gap-2">
          <Label>과제 및 시험 목록</Label>
          <Input required placeholder="과제 및 시험명" />
          <Label>시작 시간</Label>
          <Input type="datetime-local" required placeholder="시작 시간" />
          <Label>종료 시간</Label>
          <Input type="datetime-local" required placeholder="종료 시간" />
          <div className="flex items-center gap-2">
            <Label>시험 모드</Label>
            <Switch enabled={isExam} onClick={() => setIsExam(!isExam)} />
            <Label>공개</Label>
            <Switch enabled={visible} onClick={() => setVisible(!visible)} />
          </div>
        </Modal.Body>
        <Modal.Footer className="gap-2">
          <Button color="success">저장하기</Button>
          <Button color="error" type="button" onClick={handleCloseButtonClick}>
            닫기
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
