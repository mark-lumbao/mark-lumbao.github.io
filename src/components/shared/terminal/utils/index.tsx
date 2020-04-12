import React, { Fragment } from 'react';
import {
  ResultType,
  TerminalResultProps,
} from 'components/shared/terminal/types';
import * as COMMANDS from 'constants/commands';
import { PropsFromRedux } from '..';

export const scrollContainerToBottom = (
  container: HTMLDivElement,
) => { container.scrollTo(0, container.scrollHeight); };

export const setFocusToInput = (input: HTMLInputElement) => { input.focus(); };

export const resolveClass = (res: ResultType): string => {
  switch (res) {
    case ResultType.DEFAULT:
      return 'text-terminalGreen';
    case ResultType.ERROR:
      return 'text-red';
    default:
      return 'text-terminalGreen';
  }
};

export const createResult = (
  props: TerminalResultProps,
): TerminalResultProps => props;

export const jsxResultFactory = (
  results: TerminalResultProps[],
) => results.map((result: TerminalResultProps, index: number) => (
  <Fragment key={index}>
    <span className="text-yellow">$ &nbsp;</span>
    <span className="text-white">{result.command.length < 1 ? 'EMPTY' : result.command}</span>
    {/* eslint-disable-next-line prefer-template */}
    { result.result.map((text: any) => <p className={resolveClass(result.type) + ' ml-4'}>{text}</p>) }
  </Fragment>
));

export const resultFactory = (command: string, props: PropsFromRedux) => {
  switch (command) {
    case COMMANDS.SHOW: {
      const newResult = createResult({
        command,
        type: ResultType.DEFAULT,
        result: [
          'Available FLAGS for show:',
          '--languages',
          '--bio (pending)',
          '--employment (pending)',
          '--projects (pending)',
          '--tools (pending)',
        ],
      });
      return newResult;
    }
    case COMMANDS.HELP: {
      const newResult = createResult({
        command,
        type: ResultType.DEFAULT,
        result: ['Available commands: ', 'show, clear, help'],
      });
      return newResult;
    }
    case COMMANDS.SHOW_LANGUAGES: {
      const newResult = createResult({
        command,
        type: ResultType.DEFAULT,
        result: props.languages.data.map((lang) => lang.name),
      });
      return newResult;
    }
    case COMMANDS.CLEAR: {
      return null;
    }
    default: {
      const newResult = createResult({
        command,
        type: ResultType.ERROR,
        result: [`Unknown command "${command}" found.`],
      });
      return newResult;
    }
  }
};
