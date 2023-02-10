type AdminAllProblems = {
  id: number;
  title: string;
  created_time: string;
  created_user: string;
  public: boolean;
  class_id: number;
};

type AdminAllClasses = {
  id: number;
  name: string;
  year: number;
  semester: number;
  created_user: string;
};

type AdminAllProblemsResponse = {
  count: number;
  next: number | null;
  previous: number | nulle;
  results: AdminAllProblems[];
};

type AdminAnnouncements = {
  id: number;
  title: string;
  created_time: string;
  last_modified: string;
  important: boolean;
  visible: boolean;
};

type AdminAnnouncementListResponse = {
  count: number;
  next: number | null;
  previous: number | nulle;
  results: AdminAnnouncements[];
};

type EditAnnouncementSwitchRequest = {
  important?: boolean;
  visible?: boolean;
};

type AdminAllClassesResponse = {
  count: number;
  next: number | null;
  previous: number | nulle;
  results: AdminAllClasses[];
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

type AdminFaqs = {
  id: number;
  question: string;
  created_time: string;
  last_modified: string;
  visible: boolean;
};

type AdminFaqListResponse = {
  count: number;
  next: number | null;
  previous: number | nulle;
  results: AdminFaqs[];
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
