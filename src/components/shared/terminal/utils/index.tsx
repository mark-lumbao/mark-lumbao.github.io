import React, { Fragment } from 'react';
import { SHOW_PROJECTS } from 'constants/commands';
import { ResultType, TerminalResultProps, TerminalData } from '../types';

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
    <span className="text-terminalText">{result.command.length < 1 ? 'EMPTY' : result.command}</span>
    { result.result.map(({ value, link }, key) => (
      <p
        key={key}
        className={`${resolveClass(result.type)} ml-4`}
        style={{ cursor: result.type === ResultType.LINK && 'pointer' }}
        onClick={() => {
          if (result.type === ResultType.LINK) {
            window.open(link);
          }
        }}
        onKeyDown={() => {}}
        role="presentation"
      >
        {`${result.type === ResultType.LINK && '(link)'} ${value}`}
      </p>
    )) }
  </Fragment>
));

const breakObject = (data: TerminalData): string[] => Object.keys(data.result).map((key) => `${key}: ${(data.result as any)[key]}`);

export const resultFactory = (command: string, data: TerminalData[]) => {
  switch (command) {
    case 'help': { // show all available commands
      const newResult = createResult({
        command,
        type: ResultType.DEFAULT,
        result: [
          { value: 'Available commands: ' },
          { value: 'clear' },
          { value: 'help' },
          ...(data.map((i) => ({ value: i.command }))),
        ],
      });
      return newResult;
    }
    case 'clear': { return null; } // clear results
    case '': { // empty command handler
      const newResult = createResult({
        command,
        type: ResultType.ERROR,
        result: [{ value: `Unknown command "${command}" found.` }],
      });
      return newResult;
    }
    default: {
      const commandResult = data.find((item) => item.command === command);
      if (commandResult) {
        return createResult({
          command: commandResult.command,
          type: command === SHOW_PROJECTS ? ResultType.LINK : ResultType.DEFAULT,
          result: commandResult.type === 'object'
            ? breakObject(commandResult).map((item) => ({ value: item }))
            : commandResult.result.map((item: any) => {
              if (command === SHOW_PROJECTS) {
                return ({ value: item.name, link: item.link });
              }
              return ({ value: item });
            }),
        });
      }
      return createResult({
        command,
        type: ResultType.ERROR,
        result: [{ value: `Unknown command "${command}" found.` }],
      });
    }
  }
};
