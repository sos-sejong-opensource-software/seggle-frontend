import { Outlet } from 'react-router-dom';

import { Header } from '@/components';
import { PATH } from '@/constants/paths';

export function Admin() {
  const menuList = [
    { name: '전체 문제', to: PATH.ADMIN_PROBLEM_LIST },
    { name: '전체 수업', to: PATH.ADMIN_CLASS_LIST },
    { name: '공지사항', to: PATH.ADMIN_ANNOUNCEMENT_LIST },
    { name: 'FAQ', to: PATH.ADMIN_FAQ_LIST },
    { name: '사용자 관리', to: PATH.ADMIN_USER_LIST },
  ];

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
