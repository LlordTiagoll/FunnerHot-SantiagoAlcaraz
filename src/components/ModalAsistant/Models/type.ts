export type ResponseLength = {
  short: number;
  medium: number;
  long: number;
};

export type Assistant = {
  id: string;
  name: string;
  language: string;
  tone: string;
  responseLength: ResponseLength;
  audioEnabled: boolean;
  trainingText: string;
};
