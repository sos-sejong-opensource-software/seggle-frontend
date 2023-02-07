type ClassListResponse = ApiResponse<ClassList>;

type ClassList = {
  id: number;
  name: string;
  year: number;
  semester: number;
  privilege: PrivilegeNumber;
  is_show: boolean;
}[];

type ClassListIdRequest = {
  class_id: number;
}[];

type ClassRequest = {
  name: string;
  year: number;
  semester: number;
};

type ClassResponse = {
  name: string;
  year: number;
  semester: number;
  created_user: string;
};

type ProblemList = {
  id: number;
  class_id: number;
  title: string;
  public: boolean;
  created_time: string;
  created_user: string;
}[];

type ProblemListResponse = ApiResponse<ProblemList>;

type ClassStudentList = {
  username: string;
  privilege: number;
}[];

type ClassStudentListResponse = ApiResponse<ClassStudentList>;

type ClassStudentRequest = {
  username: string[];
};

type ContestList = {
  id: number;
  class_id: number;
  name: string;
  is_exam: boolean;
  visible: boolean;
  start_time: string;
  end_time: string;
}[];

type ContestListResponse = ApiResponse<ContestList>;

type ContestProblemList = {
  id: number;
  contest_id: number;
  problem_id: number;
  title: string;
  start_time: string;
  end_time: string;
  order: number;
}[];

type ContestProblemListResponse = ApiResponse<ContestProblemList>;
