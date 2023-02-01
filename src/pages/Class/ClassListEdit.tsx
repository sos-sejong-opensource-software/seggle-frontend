import { Button, Heading, Table } from '@/components';
import { PAGE } from '@/constants';

import { useClassListEditTable, useEditClassListMutation } from './hooks';

export function ClassListEdit() {
  const { column, data, handleRowClick } = useClassListEditTable();

  const { mutate: editClassList } = useEditClassListMutation();

  const handleShowButtonClick = () => {
    const classIdList = data.map(({ id }) => ({ class_id: id }));

    editClassList(classIdList);
  };

  return (
    <>
      <header className="flex items-center">
        <Heading>{PAGE.CLASS_LIST}</Heading>
        <Button onClick={handleShowButtonClick}>저장</Button>
      </header>
      <Table column={column} data={data} onRowClick={handleRowClick} />
    </>
  );
}
