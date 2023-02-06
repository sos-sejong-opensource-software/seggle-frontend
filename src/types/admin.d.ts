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
