type ProposalResult = {
  id: number;
  title: string;
  created_time: string;
  created_user: string;
}[];

type ProposalDetail = {
  id: number;
  title: string;
  context: string;
  created_user: string;
  created_time: string;
};

type ProposalResponse = {
  count: number;
  current_page: number;
  last_page: number;
  results: ProposalResult;
};

type ProposalDetailResponse = {
  id: number;
  title: string;
  context: string;
  created_time: string;
  created_user: string;
};

type CreateEditProposalRequest = {
  title: string;
  context: string;
};

type DeleteProposalResponse = {
  title: string;
  context: string;
};
