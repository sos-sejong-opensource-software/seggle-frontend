import { useParams } from 'react-router-dom';

import { Button, Modal } from '@/components';
import { StateAndAction } from '@/types/state';

import { useContestModalBody, useCreateContestMutation } from '../hooks';

type ContestFormModal<T extends React.ElementType> = Component<T> &
  StateAndAction<boolean, 'showModal'>;

export function ContestFormModal({ showModal, setShowModal }: ContestFormModal<'div'>) {
  const { classId } = useParams() as { classId: string };

  const { renderBody } = useContestModalBody();

  const { mutate: createContest } = useCreateContestMutation();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    e.preventDefault();

    const [name, startTime, endTime, isExam, visible] = Object.values(e.target)
      .filter(({ nodeName }) => nodeName === 'INPUT')
      .map(({ name, value, checked }) => (name === 'switch' ? checked : value));

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

    setShowModal(false);
  };

  return (
    <Modal open={showModal}>
      <Modal.Header>과제 및 시험 목록 생성</Modal.Header>
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
