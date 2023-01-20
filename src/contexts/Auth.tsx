import { createContext, useState } from 'react';

import { STORAGE } from '@/constants';
import { isExpired, parseJwt } from '@/utils/decodeJwt';
import { StateAndAction } from '@/types/state';

type AuthContextValue = StateAndAction<boolean, 'isLogin'>;
type AuthContextProviderProps = { children: React.ReactNode };

export const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export function AuthProvider({ children }: AuthContextProviderProps) {
  const [isLogin, setIsLogin] = useState(() => {
    const refreshToken = localStorage.getItem(STORAGE.REFRESH_TOKEN);
    return !!refreshToken && !isExpired(parseJwt(refreshToken));
  });

  return <AuthContext.Provider value={{ isLogin, setIsLogin }}>{children}</AuthContext.Provider>;
}
