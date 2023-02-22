import { useNavigate } from 'react-router-dom';

import { Modal, Button } from '@/components';
import { StateAndAction } from '@/types/state';

type ContestProblemCreateModal<T extends React.ElementType> = Component<T> &
  StateAndAction<boolean, 'showModal'>;

export function ContestProblemCreateModal({
  showModal,
  setShowModal,
}: ContestProblemCreateModal<'div'>) {
  const navigate = useNavigate();

  const handleCreateButtonClick = () => {
    navigate('create');
  };

  const handleGetButtonClick = () => {
    navigate('edit');
  };

  return (
    <Modal open={showModal}>
      <Modal.Header>문제 만들기</Modal.Header>
      <Modal.Body className="w-[300px] flex flex-col gap-2">
        <Button onClick={handleCreateButtonClick}>새로운 문제 만들기</Button>
        <Button onClick={handleGetButtonClick}>기존 문제 가져오기</Button>
      </Modal.Body>
      <Modal.Footer className="gap-2">
        <Button color="error" type="button" onClick={() => setShowModal(false)}>
          닫기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
