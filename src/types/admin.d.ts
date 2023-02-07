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

type AdminAllClassesResponse = {
  count: number;
  next: number | null;
  previous: number | nulle;
  results: AdminAllClasses[];
};
