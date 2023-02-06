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
