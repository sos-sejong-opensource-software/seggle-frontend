import { Button, Heading, LinkButton, Table } from '@/components';
import { PATH, PAGE } from '@/constants';

import { useClassListTable } from './hooks';

export function ClassList() {
  const { column, data, handleRowClick } = useClassListTable();

  return (
    <>
      <header className="flex items-center">
        <Heading>{PAGE.CLASS_LIST}</Heading>
        <LinkButton to={PATH.CLASS_LIST_EDIT}>편집</LinkButton>
        <Button>수업 생성</Button>
      </header>
      <Table column={column} data={data} onRowClick={handleRowClick} />
    </>
  );
}
