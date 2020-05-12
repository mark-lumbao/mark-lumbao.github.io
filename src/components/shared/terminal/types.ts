export interface TerminalResultProps {
  command: string;
  result: string[];
  type: ResultType;
}

export type TerminalResult = TerminalResultProps;

export enum ResultType {
  ERROR,
  DEFAULT,
}
export interface TerminalData {
  command: string;
  result: any;
  type?: 'string-list' | 'object'
}

export interface TerminalProps {
  data: TerminalData[];
}
