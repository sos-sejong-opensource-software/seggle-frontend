export const BASE_PATH: { [key: string]: string } = {
  HOME: '/',

  LOGIN: '/login',
  REGISTER: '/register',
  RESET_PASSWORD: '/reset-password',
  FIND_PASSWORD: '/find-password',

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

  PROBLEM: 'all-problems/:problemId',
  PROBLEM_CREATE: ':contestId/create',
  PROBLEM_EDIT_LIST: ':contestId/edit',
  PROBLEM_EDIT: ':contestId/edit/:problemId',
  ALL_PROBLEMS: 'all-problems',
  CLASS_LIST: 'all-classes',
  ANNOUNCEMENTS: 'announcements',
  FAQS: 'faqs',
  USER_MANAGEMENT: 'user-management',

  STUDENT_MANAGEMENT: 'student-management',
  CONTEST: 'contest',
  CONTEST_DETAIL: ':contestId',
  CONTEST_PROBLEM: ':contestId/:contestProblemId',
  CONTEST_PROBLEM_EDIT: ':contestId/:problemId/edit',
  CONTEST_LIST_EDIT: 'edit',
};

export const PATH: { [key: string]: string } = {
  ...BASE_PATH,
  BOARD_LIST: `${BASE_PATH.BOARD}`,
  BOARD_DETAIL: `${BASE_PATH.BOARD}/:id`,
  BOARD_CREATE: `${BASE_PATH.BOARD}/create`,
  BOARD_EDIT: `${BASE_PATH.BOARD}/edit/:id`,

  ANNOUNCEMENT_LIST: `${BASE_PATH.ANNOUNCEMENT}`,
  ANNOUNCEMENT_DETAIL: `${BASE_PATH.ANNOUNCEMENT}/:id`,

  COMPETITION_LIST: `${BASE_PATH.COMPETITION}`,
  COMPETITION_DETAIL: `${BASE_PATH.COMPETITION}/:id`,
  COMPETITION_FORM: `${BASE_PATH.COMPETITION}/form`,

  CLASS_LIST: `${BASE_PATH.CLASS}`,
  CLASS_LIST_EDIT: `${BASE_PATH.CLASS}/edit-class`,
  CLASS_DETAIL: `${BASE_PATH.CLASS}/:classId`,
  CLASS_FORM: `${BASE_PATH.CLASS}/form`,

  ADMIN_PROBLEM_LIST: `${SUB_PATH.ALL_PROBLEMS}`,
  ADMIN_PROBLEM_DETAIL: `${BASE_PATH.ADMIN}/${SUB_PATH.ALL_PROBLEMS}/:problemId`,
  ADMIN_CLASS_LIST: `${SUB_PATH.CLASS_LIST}`,
  ADMIN_ANNOUNCEMENT_LIST: `${SUB_PATH.ANNOUNCEMENTS}`,
  ADMIN_ANNOUNCEMENT_NEW: `${BASE_PATH.ADMIN}/${SUB_PATH.ANNOUNCEMENTS}/new`,
  ADMIN_ANNOUNCEMENT_EDIT: `${BASE_PATH.ADMIN}/${SUB_PATH.ANNOUNCEMENTS}/:id/edit`,
  ADMIN_FAQ_LIST: `${SUB_PATH.FAQS}`,
  ADMIN_FAQ_NEW: `${BASE_PATH.ADMIN}/${SUB_PATH.FAQS}/new`,
  ADMIN_FAQ_EDIT: `${BASE_PATH.ADMIN}/${SUB_PATH.FAQS}/:id/edit`,
  ADMIN_USER_LIST: `${SUB_PATH.USER_MANAGEMENT}`,
};

export const PAGE: { [key: string]: string } = {
  LOGIN: '로그인',
  REGISTER: '회원가입',
  RESET_PASSWORD: '비밀번호 재설정',

  CLASS_LIST: '수업 및 시험',
  CLASS_ALL_PROBLEMS: '전체 문제 목록',
  CLASS_STUDENT_MANAGEMENT: '수강생 및 TA 관리',
  CLASS_CONTEST: '과제 및 시험',

  ADMIN_PROBLEM_LIST: '전체 문제 목록',
  ADMIN_ANNOUNCEMENT_LIST: '전체 공지사항 목록',
  ADMIN_CLASS_LIST: '전체 수업 목록',
  NEW_ANNOUNCEMENT: '공지사항 생성',
  EDIT_ANNOUNCEMENT: '공지사항 수정',
  ADMIN_FAQ_LIST: '전체 FAQ 목록',
  NEW_FAQ: 'FAQ 생성',
  EDIT_FAQ: 'FAQ 수정',
  ADMIN_USER_LIST: '전체 사용자 목록',
};
