import { Heading, Input, Table } from '@/components';
import { PAGE } from '@/constants';
import { useSearch } from '@/hooks/useSearch';
import { UserEditModal } from './components';
import { useAdminUserTable } from './hooks';

export function AdminUserList() {
  const { keyword, onChange } = useSearch();
  const { column, data, modalProps } = useAdminUserTable(keyword);

  return (
    <>
      <div className="flex flex-row justify-between">
        <Heading as="h3" className="pageTitle">
          {PAGE.ADMIN_USER_LIST}
        </Heading>
        <div className="py-10 w-1/3">
          <Input
            type="search"
            className="h-10 w-full"
            placeholder="검색"
            onChange={onChange}
          ></Input>
        </div>
      </div>
      <Table column={column} data={data} />
      {modalProps.showModal && <UserEditModal {...modalProps} />}
    </>
  );
}