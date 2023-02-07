type User = {
  username: string;
  password: string;
};

type Token = {
  access?: string | null;
  refresh?: string | null;
};

type PrivilegeNumber = 0 | 1 | 2;

type PrivilegeString = '학생' | '교수' | '관리자';

type LoginResponse = {
  access: string;
  refresh: string;
};

type RegisterRequest = {
  name: string;
  email: string;
  password2: string;
} & User;

type EditUserRequest = {
  privilege: PrivilegeNumber;
  username: string;
};

type AdminUserResponse = {
  id: number;
  email: string;
  username: string;
  name: string;
  privilege: PrivilegeNumber;
  date_joined: string;
  is_active: boolean;
};

type ResetPasswordRequest = {
  current_password: string;
  new_password: string;
  new_password2: string;
};
