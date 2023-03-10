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

  PROBLEM: 'all-problems/:problemId',
  PROBLEM_CREATE: ':contestId/create',
  PROBLEM_EDIT_LIST: ':contestId/edit',
  ALL_PROBLEMS: 'all-problems',
  CLASS_LIST: 'all-classes',
  ANNOUNCEMENTS: 'announcements',
  FAQS: 'faqs',
  USER_MANAGEMENT: 'user-management',

  STUDENT_MANAGEMENT: 'student-management',
  CONTEST: 'contest',
  CONTEST_DETAIL: ':contestId',
  CONTEST_PROBLEM: ':contestId/:contestProblemId',
  CONTEST_PROBLEM_EDIT: ':contestId/:contestProblemId/edit',
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
  LOGIN: '?????????',
  REGISTER: '????????????',
  RESET_PASSWORD: '???????????? ?????????',

  CLASS_LIST: '?????? ??? ??????',
  CLASS_ALL_PROBLEMS: '?????? ?????? ??????',
  CLASS_STUDENT_MANAGEMENT: '????????? ??? TA ??????',
  CLASS_CONTEST: '?????? ??? ??????',

  ADMIN_PROBLEM_LIST: '?????? ?????? ??????',
  ADMIN_ANNOUNCEMENT_LIST: '?????? ???????????? ??????',
  ADMIN_CLASS_LIST: '?????? ?????? ??????',
  NEW_ANNOUNCEMENT: '???????????? ??????',
  EDIT_ANNOUNCEMENT: '???????????? ??????',
  ADMIN_FAQ_LIST: '?????? FAQ ??????',
  NEW_FAQ: 'FAQ ??????',
  EDIT_FAQ: 'FAQ ??????',
  ADMIN_USER_LIST: '?????? ????????? ??????',
};
