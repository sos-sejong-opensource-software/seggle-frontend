import { useState } from 'react';
import { useQueryDebounce } from './useQueryDebounce';

export function useSearch() {
  const [keyword, setKeyword] = useState('');
  const { debounceValue } = useQueryDebounce(keyword);

  const handleKeywordChange = ({ target: { value } }: { target: HTMLInputElement }) => {
    setKeyword(value);
  };

  return {
    keyword: debounceValue,
    onChange: handleKeywordChange,
  };
}
