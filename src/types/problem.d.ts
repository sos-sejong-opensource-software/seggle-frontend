type Problem = {
  id: number;
  class_id: number;
  title: string;
  description: string;
  data_description: string;
  evaluation: string;
  created_user: string;
  created_time: string;
  is_deleted: boolean;
  public: boolean;
};

type ProblemRequest = {
  title: string;
  class_id: number;
  description: string;
  data: 파일;
  data_description: string;
  evaluation: string;
  public: boolean;
  solution: 파일;
};

type ContestProblem = {
  id: number;
  contest_id: number;
  problem_id: number;
  title: string;
  description: string;
  data_description: string;
  start_time: string;
  end_time: string;
  evaluation: string;
  problem_data: string;
};

type ContestProblemRequest = { classId: string; contestId: string; contestProblemId: string };
