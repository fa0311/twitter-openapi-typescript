import type * as i from 'twitter-openapi-typescript-generated';
import type { DefaultFlag, TwitterApiUtilsResponse } from '@/models';
import { buildHeader, type InitOverridesType } from '@/utils';

type PostTimelineFeedbackParam = {
  feedbackType: string;
  actionMetadata: string;
  undo?: boolean;
  extraParam?: { [key: string]: any };
};

export class V20PostApiUtils {
  api: i.V20PostApi;
  flag: DefaultFlag;
  initOverrides: InitOverridesType;

  constructor(api: i.V20PostApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
  }

  /** feedbackType and actionMetadata are the query of a feedbackUrl in the timeline. */
  async postTimelineFeedback(param: PostTimelineFeedbackParam): Promise<TwitterApiUtilsResponse<undefined>> {
    const response = await this.api.postTimelineFeedbackRaw({
      feedbackType: param.feedbackType,
      actionMetadata: param.actionMetadata,
      feedbackType2: param.feedbackType, // the form repeats the query's feedback_type
      undo: param.undo ? 'true' : 'false',
      ...param.extraParam,
    });
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: undefined,
    };
  }
}
