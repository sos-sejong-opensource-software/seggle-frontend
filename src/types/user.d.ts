type User = {
  username: string;
  password: string;
};

type Token = {
  access?: string | null;
  refresh?: string | null;
};

type LoginResponse = {
  access: string;
  refresh: string;
};
