import { InstructionUnion, TimelineAddEntry, TimelineTimelineCursor } from 'twitter-openapi-typescript-generated/dist';

export type CursorApiUtilsResponse = {
  bottom?: TimelineTimelineCursor;
  top?: TimelineTimelineCursor;
};

export type ApiUtilsRaw = {
  response: Response;
  instruction: InstructionUnion[];
  entry: TimelineAddEntry[];
};
