import { Label, Input } from '@/components';

import { useUserQuery } from './query';

export const useModalBody = () => {
  const { data: user } = useUserQuery();

  const { username, name, email, privilege } = user ?? {};
  const inputList = [
    {
      id: 'username',
      label: '아이디',
      value: username,
    },
    {
      id: 'name',
      label: '이름',
      value: name,
    },
    {
      id: 'email',
      label: '이메일',
      value: email,
    },
  ];

  const renderBody = () => {
    return inputList.map(({ id, label, value }) => (
      <>
        <Label htmlFor={id}>{label}</Label>
        <Input disabled id={id} value={value} />
      </>
    ));
  };

  return {
    privilege,
    renderBody,
  };
};
