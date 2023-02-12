import { Input, Table } from '@/components';
import { useSearch } from '@/hooks/useSearch';

import { useAllProblemListTable } from './hooks';

export function ClassProblemList() {
  const { keyword, onChange } = useSearch();
  const { column, data, handleRowClick } = useAllProblemListTable(keyword);

  return (
    <>
      <form className="flex justify-end">
        <Input type="search" placeholder="검색" onChange={onChange} />
      </form>
      <Table column={column} data={data} onRowClick={handleRowClick} />
    </>
  );
}
