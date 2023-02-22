import { Outlet } from 'react-router-dom';

import { Header, Heading } from '@/components';

type ProblemProps = {
  menuList: { name: string; to: string }[];
  data: Problem;
};

export function Problem({ menuList, data }: ProblemProps) {
  return (
    <>
      <Heading as="h3" className="pageTitle">
        {data.title}
      </Heading>
      <div className="grid gap-4 grid-cols-none sm:grid-cols-6">
        <Header className="py-2 row-span-1 sm:col-span-1">
          <Header.MenuList menuList={menuList} />
        </Header>
        <section className="sm:col-span-5">
          <Outlet context={data} />
        </section>
      </div>
    </>
  );
}
