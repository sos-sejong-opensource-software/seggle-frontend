type ProposalResult = {
  id: number;
  title: string;
  created_time: string;
  created_user: string;
}[];

type ProposalResponse = {
  count: number;
  next: string;
  previous: string;
  results: ProposalResult;
};

type ProposalDetailRequest = { proposalId: string };

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
