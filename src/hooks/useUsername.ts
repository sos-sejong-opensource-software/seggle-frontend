import { STORAGE } from '@/constants';

export function useUsername() {
  const setUsername = (username: string) => localStorage.setItem(STORAGE.USERNAME, username);

  const getUsername = () => localStorage.getItem(STORAGE.USERNAME);

  const removeUsername = () => localStorage.removeItem(STORAGE.USERNAME);

  return {
    setUsername,
    username: getUsername(),
    removeUsername,
  };
}
