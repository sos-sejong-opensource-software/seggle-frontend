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

type CreateAnnouncementRequest = {
  title: string;
  context: string;
  important: boolean;
  visible: boolean;
};
