import { SHOW_PROJECTS } from 'constants/commands';
import { breakObject } from 'utils';
import { ITerminalData } from 'components/shared/terminal';
import {
  ITerminalResult,
  ResultType,
} from 'components/shared/terminal/partials/result';

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

export const resultFactory = (
  command: string,
  data: ITerminalData[],
): ITerminalResult | null => {
  const commandResult = data.find((item) => item.command === command);
  const errorResult = {
    command,
    type: ResultType.ERROR,
    result: [{ value: `Unknown command "${command}" found.` }],
  };

  switch (command) {
    case 'help': {
      // show all available commands
      return {
        command,
        type: ResultType.DEFAULT,
        result: [
          { value: 'Available commands: ' },
          { value: 'clear' },
          { value: 'help' },
          ...data.map((i) => ({ value: i.command })),
        ],
      };
    }
    case 'clear': {
      return null; // clear results
    }
    case '': {
      return errorResult; // empty command handler
    }
    default: {
      if (commandResult) {
        return {
          command: commandResult.command,
          type:
            command === SHOW_PROJECTS ? ResultType.LINK : ResultType.DEFAULT,
          result:
            commandResult.type === 'object'
              ? breakObject(commandResult.result).map((item) => ({
                value: item,
              }))
              : commandResult.result.map((item: any) => {
                if (command === SHOW_PROJECTS) {
                  return { value: item.name, link: item.link };
                }
                return { value: item };
              }),
        };
      }
      return errorResult;
    }
  }
};
