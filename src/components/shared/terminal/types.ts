import { HTMLAttributes } from 'react';

export enum ResultType { // eslint-disable-line no-shadow
  ERROR,
  LINK,
  DEFAULT,
}

export interface TerminalResultProps extends HTMLAttributes<unknown> {
  command: string;
  result: { value: string, link?: string }[];
  type: ResultType;
}

export type TerminalResult = TerminalResultProps;

export interface TerminalData {
  command: string;
  result: any;
  type?: 'string-list' | 'object'
}

export interface TerminalProps extends HTMLAttributes<unknown> {
  data: TerminalData[];
}
