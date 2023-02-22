import { Heading, Input, Table } from '@/components';
import Pagination from '@/components/Pagination';
import { PAGE } from '@/constants/paths';
import { useSearch } from '@/hooks/useSearch';
import { useState } from 'react';
import { useAdminClassListTable } from './hooks';

export function AdminClassList() {
  const { keyword, onChange } = useSearch();
  const [currentPage, setCurrentPage] = useState(1);
  const { column, data, handleRowClick, page } = useAdminClassListTable(keyword, currentPage);

  return (
    <>
      <div className="flex flex-row justify-between">
        <Heading as="h3" className="pageTitle">
          {PAGE.ADMIN_CLASS_LIST}
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
