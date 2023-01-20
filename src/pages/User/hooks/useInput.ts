import { useState } from 'react';

import { REGEXP } from '../constants';

type AuthFormInput = 'NAME' | 'EMAIL' | 'USERNAME' | 'PASSWORD' | 'PASSWORDCHECK';

export const useInput = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = (
    {
      target: { id, value },
    }: {
      target: HTMLInputElement;
    },
    password: string
  ) => {
    setValue(value);

    const key = id.toUpperCase() as AuthFormInput;
    if (key === 'PASSWORDCHECK') {
      setError(password !== value);
      return;
    }
    setError(!REGEXP[key].test(value));
  };

  return { value, error, handleInputChange };
};
