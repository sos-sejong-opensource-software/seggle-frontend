type ClassListResponse = {
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
