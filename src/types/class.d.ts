type ClassListResponse = {
  count: number;
  next: number | null;
  previous: number | nulle;
  results: ClassList;
};

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
