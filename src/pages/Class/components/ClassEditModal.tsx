import { Button, Modal } from '@/components';
import { StateAndAction } from '@/types/state';

import { useModalBody } from '../hooks';
import { useEditClassMutation, useClassQuery } from '../hooks/query';

type ClassListEditModalProps<T extends React.ElementType> = Component<T> & {
  classId: string;
} & StateAndAction<boolean, 'showModal'>;

export function ClassEditModal({
  classId,
  showModal,
  setShowModal,
}: ClassListEditModalProps<'div'>) {
  const { data } = useClassQuery(classId);
  const { renderBody } = useModalBody(data);
  const { mutate: editClass } = useEditClassMutation();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    e.preventDefault();

    const [year, semester, name] = Object.values(e.target).map(({ value }) => value);
    editClass({ classId, payload: { year, semester, name } });

    setShowModal(false);
  };

  const handleCloseButtonClick = () => {
    setShowModal(false);
  };

  return (
    <Modal open={showModal}>
      <Modal.Header>수업 편집</Modal.Header>
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
