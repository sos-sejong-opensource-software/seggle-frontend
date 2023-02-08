import { useParams, Outlet } from 'react-router-dom';

import { Header } from '@/components';

import { useClassContestListQuery } from './hooks';

export function ClassContest() {
  const { classId } = useParams() as { classId: string };
  const {
    data: { results },
  } = useClassContestListQuery(classId);
  const menuList = results.map(({ id, name }) => ({ name, to: `${id}` }));

  return (
    <div className="grid gap-4 grid-cols-none sm:grid-cols-6">
      <Header className="py-2 row-span-1 sm:col-span-1">
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
