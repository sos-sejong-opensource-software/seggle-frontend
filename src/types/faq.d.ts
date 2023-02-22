type FaqResponse = {
  id: number;
  question: string;
  answer: string;
  created_time: string;
  last_modified: string;
  visible: boolean;
  created_user: string;
}[];
