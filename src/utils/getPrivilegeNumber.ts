import { PRIVILEGE } from '@/constants';

export const getPrivilegeNumber = (privilegeString: PrivilegeString) => {
  return Object.keys(PRIVILEGE).find(
    (key) => PRIVILEGE[+key as PrivilegeNumber] === privilegeString
  );
};
