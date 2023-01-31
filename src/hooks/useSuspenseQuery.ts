import {
  QueryFunction,
  QueryKey,
  QueryObserverSuccessResult,
  useQuery,
  UseQueryOptions,
} from 'react-query';

type SuspenseQueryObserverResult<TData = unknown, TError = unknown> = QueryObserverSuccessResult<
  TData,
  TError
>;
type UseSuspenseBaseQueryResult<TData, TError> = SuspenseQueryObserverResult<TData, TError>;
type UseSuspenseQueryResult<TData = unknown, TError = unknown> = UseSuspenseBaseQueryResult<
  TData,
  TError
>;

export function useSuspenseQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn'>
): UseSuspenseQueryResult<TData, TError> {
  return useQuery(queryKey, queryFn, options) as unknown as UseSuspenseQueryResult<TData, TError>;
}
