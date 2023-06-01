export type ApiUtilsHeader = {
  raw: Headers;
  connectionHash: string | null;
  contentTypeOptions: string | null;
  frameOptions: string | null;
  rateLimitLimit: number;
  rateLimitRemaining: number;
  rateLimitReset: number;
  responseTime: number;
  tfePreserveBody: boolean;
  transactionId: string | null;
  twitterResponseTags: string | null;
  xssProtection: number;
};
