export const BASE_PATH: { [key: string]: string } = {
  HOME: '/',

  LOGIN: '/login',
  REGISTER: '/register',

  COMPETITION: '/competition',
  CLASS: '/class',
  BOARD: '/board',
  ANNOUNCEMENT: '/announcement',
  FAQ: '/faq',
};

const SUB_PATH = {
  DATA: 'data',
  DESCRIPTION: 'description',
  LEADERBOARD: 'leaderboard',
  SUBMISSON: 'submission',
};

export const PATH: { [key: string]: string } = {
  ...BASE_PATH,
  BOARD_LIST: `${BASE_PATH.BOARD}`,
  BOARD_DETAIL: `${BASE_PATH.BOARD}/:id`,

  ANNOUNCEMENT_LIST: `${BASE_PATH.ANNOUNCEMENT}`,
  ANNOUNCEMENT_DETAIL: `${BASE_PATH.ANNOUNCEMENT}/:id`,

  COMPETITION_LIST: `${BASE_PATH.COMPETITION}`,
  COMPETITION_DETAIL: `${BASE_PATH.COMPETITION}/:id`,
  COMPETITION_FORM: `${BASE_PATH.COMPETITION}/form`,

  CLASS_LIST: `${BASE_PATH.CLASS}`,
  CLASS_LIST_EDIT: `${BASE_PATH.CLASS}/edit-class`,
  CLASS_DETAIL: `${BASE_PATH.CLASS}/:id`,
  CLASS_FORM: `${BASE_PATH.CLASS}/form`,
};

export const PAGE: { [key: string]: string } = {
  LOGIN: '로그인',
  REGISTER: '회원가입',

  CLASS_LIST: '수업 및 시험',
};
