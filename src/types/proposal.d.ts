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