type AnnouncementResponse = {
    count: number;
    next?: number | null;
    previous?: number | null;    
    results?: AnnouncementResult | [];
  };
  
type AnnouncementResult = {
    id: number;
    title: string;
    created_time: string;
    last_modified: string;
    visible: boolean;
    important: boolean;
}[];
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