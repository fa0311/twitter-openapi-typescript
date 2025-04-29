import * as i from 'twitter-openapi-typescript-generated';
import { InitOverrideFunction } from 'twitter-openapi-typescript-generated';
export type initOverrides = RequestInit | InitOverrideFunction;
export type ApiFunction<T> = (requestParameters: any, initOverrides?: initOverrides) => Promise<i.ApiResponse<T>>;

export type RequestParam<T1, T2> = {
  apiFn: ApiFunction<T2>;
  convertFn: (arg0: T2) => T1;
  key: string;
  param: { [key: string]: any };
};
