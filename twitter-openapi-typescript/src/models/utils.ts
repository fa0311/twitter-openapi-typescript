import * as i from 'twitter-openapi-typescript-generated';

export type ApiFunction<T> = (requestParameters: {
  pathQueryId: string;
  queryId: string;
  variables: string;
  features: string;
  fieldToggles: string;
}) => Promise<i.ApiResponse<T>>;

export type RequestParam<T1, T2> = {
  apiFn: ApiFunction<T2>;
  convertFn: ConvertFunction<T1, T2>;
  key: string;
  param: { [key: string]: any };
};

export type ConvertFunction<T1, T2> = (arg0: T2) => T1;
