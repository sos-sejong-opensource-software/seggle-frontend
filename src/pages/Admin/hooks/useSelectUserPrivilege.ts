import { useEffect, useState } from 'react';

import { PRIVILEGE } from '@/constants';
import { getPrivilegeNumber } from '@/utils/getPrivilegeNumber';

export const useSelectUserPrivilege = (initialPrivilege: PrivilegeNumber) => {
  const [selectedPrivilege, setSelectedPrivilege] = useState(initialPrivilege);

  useEffect(() => setSelectedPrivilege(initialPrivilege), [initialPrivilege]);

  const handleSelectChange = ({ target: { value } }: { target: HTMLSelectElement }) => {
    const selectedValue = getPrivilegeNumber(value as PrivilegeString);
    if (selectedValue) setSelectedPrivilege(+selectedValue as PrivilegeNumber);
  };

  const options = Object.values(PRIVILEGE).map((privilege) => ({
    value: privilege,
  }));

  return {
    selectedPrivilege,
    selected: PRIVILEGE[selectedPrivilege],
    onChange: handleSelectChange,
    options,
  };
};
