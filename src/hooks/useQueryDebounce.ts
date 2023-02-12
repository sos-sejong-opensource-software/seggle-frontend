import { useState, useEffect } from 'react';

export const useQueryDebounce = (value: string, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return { debounceValue };
};
