import { Button, Heading, Input, Table } from '@/components';
import { PAGE, PATH } from '@/constants/paths';
import { useSearch } from '@/hooks/useSearch';
import { useNavigate } from 'react-router-dom';
import { useAdminAnnouncementsTable } from './hooks';

export function AdminAnnouncementList() {
  const navigate = useNavigate();
  const { keyword, onChange } = useSearch();
  const { column, data } = useAdminAnnouncementsTable(keyword);

  return (
    <>
      <div className="flex flex-row justify-between">
        <Heading as="h3" className="pageTitle">
          {PAGE.ANNOUNCEMENT_LIST}
          <Button onClick={() => navigate(`${PATH.ADMIN}/${PATH.ADMIN_ANNOUNCEMENT_LIST}/new`)}>
            글쓰기
          </Button>
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
    </>
  );
}
