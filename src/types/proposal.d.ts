type ProposalResponse = {
    count: number;
    next?: number | null;
    previous?: number | null;    
    results?: ProposalResult | [];
  };
  
type ProposalResult = {
    id: number;
    title: string;
    created_time: string;
    created_user: string;
}[];