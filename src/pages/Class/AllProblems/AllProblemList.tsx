import { Input, Table } from '@/components';
import Pagination from '@/components/Pagination';
import { useSearch } from '@/hooks/useSearch';
import { useState } from 'react';

import { useAllProblemListTable } from './hooks';

export function ClassProblemList() {
  const { keyword, onChange } = useSearch();
  const [currentPage, setCurrentPage] = useState(1);
  const { column, data, handleRowClick, page } = useAllProblemListTable(keyword, currentPage);

  return (
    <>
      <form className="flex justify-end">
        <Input type="search" placeholder="검색" onChange={onChange} />
      </form>
      <Table column={column} data={data} onRowClick={handleRowClick} />
      <Pagination setCurrentPage={setCurrentPage} {...page} />
    </>
  );
}
