import { useParams, Outlet } from 'react-router-dom';

import { Header, Heading } from '@/components';
import { PAGE, SUB_PATH } from '@/constants';

import { useClassQuery } from './hooks';

export function Class() {
  const { id } = useParams();
  const {
    data: { name },
  } = useClassQuery(id as string);

  const menuList = [
    { name: PAGE.CLASS_ALL_PROBLEMS, to: SUB_PATH.ALL_PROBLEMS },
    { name: PAGE.CLASS_STUDENT_MANAGEMENT, to: SUB_PATH.STUDENT_MANAGEMENT },
    { name: PAGE.CLASS_CONTEST, to: SUB_PATH.CONTEST },
  ];
  return (
    <>
      <Heading as="h2" className="pageTitle">
        {name}
      </Heading>
      <Header>
        <Header.MenuList menuList={menuList} className="flex gap-3" />
      </Header>
      <Outlet />
    </>
  );
}
