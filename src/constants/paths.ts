export const BASE_PATH: { [key: string]: string } = {
  HOME: '/',

  LOGIN: '/login',
  REGISTER: '/register',
  RESET_PASSWORD: '/reset-password',

  COMPETITION: '/competition',
  CLASS: '/class',
  BOARD: '/board',
  ANNOUNCEMENT: '/announcement',
  FAQ: '/faq',

  ADMIN: '/admin',
  USER_HOME: '/users',
};

export const SUB_PATH = {
  DATA: 'data',
  DESCRIPTION: 'description',
  LEADERBOARD: 'leaderboard',
  SUBMISSON: 'submission',

  ALL_PROBLEMS: 'all-problems',
  ALL_CLASSES: 'all-classes',
  ANNOUNCEMENTS: 'announcements',
  FAQS: 'faqs',
  USER_MANAGEMENT: 'user-management',

  STUDENT_MANAGEMENT: 'student-management',
  CONTEST: 'contest',
  CONTEST_DETAIL: ':contestId',
  CONTEST_LIST_EDIT: 'edit',
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
  CLASS_DETAIL: `${BASE_PATH.CLASS}/:classId`,
  CLASS_FORM: `${BASE_PATH.CLASS}/form`,

  ADMIN_ALL_PROBLEMS: `${BASE_PATH.ADMIN}/${SUB_PATH.ALL_PROBLEMS}`,
  ADMIN_ALL_CLASSES: `${SUB_PATH.ALL_CLASSES}`,
  ADMIN_ANNOUNCEMENTS: `${BASE_PATH.ADMIN}/${SUB_PATH.ANNOUNCEMENTS}`,
  ADMIN_FAQS: `${SUB_PATH.FAQS}`,
  ADMIN_USER_MANAGEMENT: `${SUB_PATH.USER_MANAGEMENT}`,
};

export const PAGE: { [key: string]: string } = {
  LOGIN: '로그인',
  REGISTER: '회원가입',
  RESET_PASSWORD: '비밀번호 재설정',

  CLASS_LIST: '수업 및 시험',
  CLASS_ALL_PROBLEMS: '전체 문제 목록',
  CLASS_STUDENT_MANAGEMENT: '수강생 및 TA 관리',
  CLASS_CONTEST: '과제 및 시험',

  ALL_PROBLEMS: '전체 문제 목록',
  ALL_ANNOUNCEMENTS: '전체 공지사항 목록',
  ALL_CLASSES: '전체 수업 목록',
};
