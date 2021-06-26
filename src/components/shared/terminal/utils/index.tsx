import { SHOW_PROJECTS } from 'constants/commands';
import * as UTILS from 'utils';
import { ResultType, TerminalResultProps, TerminalData } from '../types';
import TerminalResult from '../partials/result';

export const scrollContainerToBottom = (
  container: HTMLDivElement,
) => { container.scrollTo(0, container.scrollHeight); };

export const createResult = (
  props: TerminalResultProps,
): TerminalResultProps => props;

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

export const jsxResultFactory = (
  results: TerminalResultProps[],
) => results.map((result: TerminalResultProps, index: number) => (
  <TerminalResult result={result} key={index} />
));

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
            ? UTILS.breakObject(commandResult.result).map((item) => ({ value: item }))
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
