import { Button, Heading, Table } from '@/components';
import { PAGE, PATH } from '@/constants/paths';
import { useNavigate } from 'react-router-dom';
import { useAdminFaqsTable } from './hooks';

export function AdminFaqList() {
  const navigate = useNavigate();
  const { column, data } = useAdminFaqsTable();

  return (
    <>
      <div className="flex flex-row justify-between">
        <Heading as="h3" className="pageTitle">
          {PAGE.ADMIN_FAQ_LIST}
          <Button onClick={() => navigate(`${PATH.ADMIN}/${PATH.ADMIN_FAQ_LIST}/new`)}>
            글쓰기
          </Button>
        </Heading>
      </div>
      <Table column={column} data={data} />
    </>
  );
}
