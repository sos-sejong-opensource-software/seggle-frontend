type AnnouncementResult = {
  id: number;
  title: string;
  created_time: string;
  last_modified: string;
  important: boolean;
  visible: boolean;
}[];

type AnnouncementDetail = {
  id: number;
  title: string;
  context: string;
  created_time: string;
  created_user: string;
  last_modified: string;
  important: boolean;
  visible: boolean;
};

type AnnouncementResponse = {
  count: number;
  next: string;
  previous: string;
  results: AnnouncementResult;
};

type AnnouncementDetailResponse = {
  id: number;
  title: string;
  context: string;
  created_time: string;
  created_user: string;
};
