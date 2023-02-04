import { Heading, Table } from '@/components';
import { PAGE } from '@/constants/paths';
import { useAdminAllProblemsTable } from './hooks/useAdminAllProblemsTable';

export function AdminAllProblems() {
  const { column, data, handleRowClick } = useAdminAllProblemsTable();

  return (
    <>
      <Heading className="pageTitle">{PAGE.ALL_PROBLEMS}</Heading>
      <Table column={column} data={data} onRowClick={handleRowClick} />
    </>
  );
}
