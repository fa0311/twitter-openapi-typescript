import * as i from 'twitter-openapi-typescript-generated';

export type ApiFunction<T> = (requestParameters: {
  queryId: string;
  variables: string;
  features: string;
}) => Promise<i.ApiResponse<T>>;

export type RequestParamDefault<T> = {
  apiFn: ApiFunction<T>;
  key: string;
  param: { [key: string]: any };
};

export type RequestParam<T1, T2> = {
  apiFn: ApiFunction<T2>;
  convertFn: ConvertFunction<T1, T2>;
  key: string;
  param: { [key: string]: any };
};

export type ConvertFunction<T1, T2> = (arg0: T2) => T1;
