import { useParams } from 'react-router-dom';

import { StateAndAction } from '@/types/state';
import { Modal, Button } from '@/components';

import { useContestModalBody, useEditContestMutation } from '../hooks';

type ContestEditmModal<T extends React.ElementType> = Component<T> &
  StateAndAction<boolean, 'showModal'> & {
    contestId: string;
    data?: ContestRequest & { id: number; class_id: number };
  };

export function ContestEditModal({
  contestId,
  data,
  showModal,
  setShowModal,
}: ContestEditmModal<'div'>) {
  const { classId } = useParams() as { classId: string };

  const { renderBody, isExam, visible } = useContestModalBody(data);

  const { mutate: editContest } = useEditContestMutation();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    e.preventDefault();

    const [name, startTime, endTime] = Object.values(e.target).map(({ value }) => value);

    editContest({
      classId,
      contestId,
      payload: {
        name,
        start_time: startTime,
        end_time: endTime,
        is_exam: isExam,
        visible,
      },
    });

    setShowModal(false);
  };

  return (
    <Modal open={showModal}>
      <Modal.Header>과제 및 시험 목록 편집</Modal.Header>
      <form onSubmit={handleFormSubmit}>
        <Modal.Body className="w-[300px] flex flex-col gap-2">{renderBody()}</Modal.Body>
        <Modal.Footer className="gap-2">
          <Button color="success">저장하기</Button>
          <Button color="error" type="button" onClick={() => setShowModal(false)}>
            닫기
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
