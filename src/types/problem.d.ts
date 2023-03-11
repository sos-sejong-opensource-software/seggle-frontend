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
  data: Blob;
  data_description: string;
  evaluation: string;
  public: boolean;
  solution: Blob;
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

type ContestProblemRequest = {
  classId: string;
  contestId: string;
  contestProblemId: string;
  currentPage?: number;
};

type ContestProblemSubmission = {
  id: number;
  username: string;
  score: number;
  status: number;
  on_leaderboard: boolean;
  created_time: string;
}[];

type ContestProblemSubmissionResponse = ApiResponse<ContestProblemSubmission>;

type ContestProblemSubmissionRequest = {
  csv: Blob;
  ipynb: Blob;
};
