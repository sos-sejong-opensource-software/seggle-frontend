type ApiResponse<T> = {
  count: number;
  last_page: number;
  current_page: number;
  results: T;
};
