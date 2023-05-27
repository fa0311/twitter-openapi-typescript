import * as i from 'twitter-openapi-typescript-generated/src';

export type ApiFunction<T> = (data: { features: string; variables: string }) => Promise<T>;
export type ConvertInstructionsFunction<T> = (arg0: T) => i.InstructionUnion[];
