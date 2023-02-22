import { Navigate, Outlet, To } from 'react-router-dom';

import { useUsername } from '@/hooks/useUsername';
import { useUserQuery } from '@/pages/User/hooks/query';

export function PrivateRoute({
  privilege,
  redirectPath = '/login',
}: {
  privilege?: number;
  redirectPath?: To;
}) {
  const { username } = useUsername();

  const { data } = useUserQuery(username ?? '');

  if (!username || (privilege && privilege !== data.privilege)) {
    return <Navigate to={redirectPath} />;
  }

  return <Outlet />;
}
