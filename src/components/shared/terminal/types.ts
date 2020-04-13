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
