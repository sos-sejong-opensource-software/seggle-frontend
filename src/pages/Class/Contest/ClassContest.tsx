import { useState } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router-dom';

import { Header, Heading, Button } from '@/components';
import { SUB_PATH } from '@/constants';

import { ContestFormModal } from './components';
import { useClassContestListQuery } from './hooks';

export function ClassContest() {
  const navigate = useNavigate();
  const [showCreateModal, setShowCreateModal] = useState(false);

  const { classId } = useParams() as { classId: string };
  const {
    data: { results },
  } = useClassContestListQuery(classId);
  const menuList = results.map(({ id, name }) => ({ name, to: `${id}` }));

  return (
    <div className="grid gap-4 grid-cols-none sm:grid-cols-6">
      <Header className="row-span-1 sm:col-span-1">
        <div className="flex items-center mb-4">
          <Heading as="h5">목록</Heading>
          <Button onClick={() => setShowCreateModal(true)}>추가</Button>
          <Button onClick={() => navigate(`${SUB_PATH.CONTEST_LIST_EDIT}`)}>편집</Button>
          <ContestFormModal showModal={showCreateModal} setShowModal={setShowCreateModal} />
        </div>
        <Header.MenuList
          menuList={menuList}
          className="flex items-center justify-center gap-4 flex-col"
        />
      </Header>
      <section className="sm:col-span-5">
        <Outlet />
      </section>
    </div>
  );
}
