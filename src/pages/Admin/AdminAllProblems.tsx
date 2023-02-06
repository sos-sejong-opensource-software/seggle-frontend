import { Heading, Input, Table } from '@/components';
import { PAGE } from '@/constants/paths';
import { useState } from 'react';
import { useAdminAllProblemsTable } from './hooks/useAdminAllProblemsTable';

export function AdminAllProblems() {
  const [keyword, setKeyword] = useState('');
  const { column, data, handleRowClick } = useAdminAllProblemsTable(keyword);

  function handleKeywordChange({ target: { value } }: { target: HTMLInputElement }) {
    setKeyword(value);
  }

  return (
    <>
      <div className="flex flex-row justify-between">
        <Heading as="h3" className="pageTitle">
          {PAGE.ALL_PROBLEMS}
        </Heading>
        <div className="py-10 w-1/3">
          <Input
            className="h-10 w-full"
            placeholder="검색"
            onChange={(e) => {
              handleKeywordChange(e);
            }}
            value={keyword}
          ></Input>
        </div>
      </div>
      <Table column={column} data={data} onRowClick={handleRowClick} />
    </>
  );
}
