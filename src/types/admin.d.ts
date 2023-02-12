type AdminProblemList = {
  id: number;
  title: string;
  created_time: string;
  created_user: string;
  public: boolean;
  class_id: number;
};

type AdminClassList = {
  id: number;
  name: string;
  year: number;
  semester: number;
  created_user: string;
};

type AdminProblemListResponse = {
  count: number;
  current_page: number;
  last_page: number;
  results: AdminProblemList[];
};

type AdminAnnouncement = {
  id: number;
  title: string;
  created_time: string;
  last_modified: string;
  important: boolean;
  visible: boolean;
};

type AdminAnnouncementListResponse = {
  count: number;
  current_page: number;
  last_page: number;
  results: AdminAnnouncement[];
};

type EditAnnouncementSwitchRequest = {
  important?: boolean;
  visible?: boolean;
};

type AdminClassListResponse = {
  count: number;
  current_page: number;
  last_page: number;
  results: AdminClassList[];
};

type CreateEditAnnouncementRequest = {
  title: string;
  context: string;
  important: boolean;
  visible: boolean;
};

type AdminAnnouncementResponse = {
  title: string;
  context: string;
  important: boolean;
  visible: boolean;
  id: number;
  created_user: string;
  created_time: string;
  last_modified: string;
};

type AdminFaq = {
  id: number;
  question: string;
  created_time: string;
  last_modified: string;
  visible: boolean;
};

type AdminFaqListResponse = {
  count: number;
  current_page: number;
  last_page: number;
  results: AdminFaq[];
};

type CreateEditFaqRequest = {
  question: string;
  answer: string;
  visible: boolean;
};

type AdminFaqResponse = {
  question: string;
  answer: string;
  visible: boolean;
  id: number;
  created_user: string;
  created_time: string;
  last_modified: string;
};

type AdminUser = {
  id: number;
  email: string;
  username: string;
  name: string;
  privilege: number;
  date_joined: string;
  is_active: boolean;
};

type AdminUserListResponse = {
  count: number;
  current_page: number;
  last_page: number;
  results: AdminUser[];
};
