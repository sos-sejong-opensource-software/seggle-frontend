type JwtDataType = {
  exp: number;
  iat: number;
  jti: string;
  token_type: 'access' | 'refresh';
  user_id: number;
};

export const parseJwt = (token: string): JwtDataType => {
  if (!token) throw new Error('Invalid token');

  return JSON.parse(atob(token.split('.')[1]));
};

export const isExpired = (data: JwtDataType) => {
  return new Date(data.exp * 1000) < new Date();
};
