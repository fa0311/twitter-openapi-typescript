import * as i from 'twitter-openapi-typescript-generated/src';

export type ApiFunction<T> = (requestParameters: {
  queryId: string;
  variables: string;
  features: string;
}) => Promise<i.ApiResponse<T>>;

export type ConvertInstructionsFunction<T> = (arg0: T) => i.InstructionUnion[];
