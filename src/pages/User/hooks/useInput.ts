import { useState } from 'react';

export const useInput = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  return { value, setValue, error, setError };
};
