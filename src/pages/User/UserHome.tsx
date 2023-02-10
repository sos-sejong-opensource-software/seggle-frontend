import { Heading, LinkButton, Table } from '@/components';
import { PATH, PAGE } from '@/constants';

import { useUserCompetitionListTable } from './hooks';

export function UserHome() {
  const tableProps = useUserCompetitionListTable();
  return (
    <>
      <header className="flex items-center gap-2">
        <Heading as="h2" className="pageTitle">
          {/*  FIXME: username 변경 */}
          username님, 안녕하세요
        </Heading>
        {/* FIXME: 회원탈퇴 연결 */}
        <LinkButton to={'#'}>회원탈퇴</LinkButton>
        <LinkButton to={PATH.RESET_PASSWORD}>{PAGE.RESET_PASSWORD}</LinkButton>
      </header>
      <Table {...tableProps} />
    </>
  );
}
