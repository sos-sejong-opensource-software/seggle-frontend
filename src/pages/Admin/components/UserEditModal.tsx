import { Button, Modal, Label, Select } from '@/components';
import { StateAndAction } from '@/types/state';

import { useModalBody, useSelectUserPrivilege } from '../hooks';
import { useEditUserPrivilegeMutation } from '../hooks/query';

type UserEditModalProps<T extends React.ElementType> = Component<T> &
  StateAndAction<boolean, 'showModal'>;

export function UserEditModal({ showModal, setShowModal }: UserEditModalProps<'div'>) {
  const { privilege, renderBody } = useModalBody();
  const { selectedPrivilege, ...selectProps } = useSelectUserPrivilege(
    privilege as PrivilegeNumber
  );
  const { mutate: editUserPrivilege } = useEditUserPrivilegeMutation();

  const handleFormSubmit = () => {
    /** FIXME: username 수정 필요 */
    editUserPrivilege({ username: 'test230119', privilege: selectedPrivilege });
    /** TODO: 성공, 에러 처리 추가 필요 */
    setShowModal(false);
  };

  const handleCloseButtonClick = () => {
    setShowModal(false);
  };

  return (
    <Modal open={showModal}>
      <Modal.Header>사용자 정보 수정</Modal.Header>
      <form onSubmit={handleFormSubmit}>
        <Modal.Body className="w-[300px]">
          {renderBody()}
          <Label htmlFor="privilege">권한</Label>
          <Select id="privilege" {...selectProps} />
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
