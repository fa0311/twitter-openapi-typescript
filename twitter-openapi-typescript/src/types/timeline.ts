import * as i from 'twitter-openapi-typescript-generated';

export type CursorApiUtilsResponse = {
  bottom?: i.TimelineTimelineCursor;
  top?: i.TimelineTimelineCursor;
};

export type ApiUtilsRaw = {
  response: Response;
  instruction: i.InstructionUnion[];
  entry: i.TimelineAddEntry[];
};
