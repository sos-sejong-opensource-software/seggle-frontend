import { Button, Modal } from '@/components';
import { StateAndAction } from '@/types/state';

import { useModalBody, useCreateClassListMutation } from '../hooks';

type ClassFormModalProps<T extends React.ElementType> = Component<T> &
  StateAndAction<boolean, 'showModal'>;

export function ClassFormModal({ showModal, setShowModal }: ClassFormModalProps<'div'>) {
  const { renderBody } = useModalBody();
  const { mutate: createClass } = useCreateClassListMutation();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    e.preventDefault();

    const [year, semester, name] = Object.values(e.target).map(({ value }) => value);
    createClass({ year, semester, name });

    setShowModal(false);
  };

  const handleCloseButtonClick = () => {
    setShowModal(false);
  };

  return (
    <Modal open={showModal}>
      <Modal.Header>수업 생성</Modal.Header>
      <form onSubmit={handleFormSubmit}>
        <Modal.Body className="w-[300px]">{renderBody()}</Modal.Body>
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
