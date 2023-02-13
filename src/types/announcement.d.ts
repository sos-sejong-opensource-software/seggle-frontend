type AnnouncementResult = {
    id: number;
    title: string;
    created_time: string;
    last_modified: string;
    visible: boolean;
    important: boolean;
}[];

type AnnouncementResponse = {
    count: number;
    next: string | null;
    previous: string | null;    
    results: AnnouncementResult;
  };
  
  /**
   *     
   * 
   id: number;
    title: string;
    created_time: string;
    last_modified: string;
    visible: boolean;
    important: boolean;
   */