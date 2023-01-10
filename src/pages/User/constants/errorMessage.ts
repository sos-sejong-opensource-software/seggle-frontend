export const LOGIN_ERROR: { [key: string]: string } = {
  USERNAME: '아이디는 5자 이상입니다.',
  PASSWORD: '비밀번호는 8자 이상입니다.',
  LOGIN_FAILED: '아이디 또는 비밀번호를 잘못 입력하였습니다.',
};

export const REGISTER_ERROR: { [key: string]: string } = {
  ...LOGIN_ERROR,
  PASSWORDCHECK: '비밀번호와 일치하지 않습니다.',
};
