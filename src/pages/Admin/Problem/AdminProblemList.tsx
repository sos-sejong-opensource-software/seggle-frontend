import { Heading, Input, Table } from '@/components';
import { PAGE } from '@/constants/paths';
import { useAdminProblemListTable } from './hooks';
import { useSearch } from '@/hooks/useSearch';
import Pagination from '@/components/Pagination';
import { useState } from 'react';

export function AdminProblemList() {
  const { keyword, onChange } = useSearch();
  const [currentPage, setCurrentPage] = useState(1);
  const { column, data, handleRowClick, page } = useAdminProblemListTable(keyword, currentPage);

  return (
    <>
      <div className="flex flex-row justify-between">
        <Heading as="h3" className="pageTitle">
          {PAGE.ADMIN_PROBLEM_LIST}
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
      <Table column={column} data={data} onRowClick={handleRowClick} />
      <Pagination setCurrentPage={setCurrentPage} {...page} />
    </>
  );
}
