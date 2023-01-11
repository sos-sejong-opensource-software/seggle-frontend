export const LOGIN_ERROR: { [key: string]: string } = {
  USERNAME: '아이디는 4자 이상 20자 이하입니다.',
  PASSWORD: '비밀번호는 8자 이상입니다.',
  LOGIN_FAILED: '아이디 또는 비밀번호를 잘못 입력하였습니다.',
};

export const REGISTER_ERROR: { [key: string]: string } = {
  ...LOGIN_ERROR,
  NAME: '이름을 입력해주세요.',
  EMAIL: '이메일 형식이 올바르지 않습니다.',
  PASSWORDCHECK: '비밀번호와 일치하지 않습니다.',
  REGISTER_FAILED: '가입에 실패하였습니다.',
};
