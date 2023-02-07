type AdminAllProblems = {
  id: number;
  title: string;
  created_time: string;
  created_user: string;
  public: boolean;
  class_id: number;
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
