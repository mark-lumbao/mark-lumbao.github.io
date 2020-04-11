import React, { Fragment, useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as COMMANDS from 'constants/commands';
import { RootState } from 'store/reducers';
import { fetchLanguagesRequest } from 'store/actions/languages';

// TODO: Implement other Sagas for other Fetches

export interface TerminalResultProps {
  command: string;
  result: string[];
  type: ResultType;
}

export enum ResultType {
  ERROR,
  DEFAULT,
}

const createResult = (
  props: TerminalResultProps,
): TerminalResultProps => props;

const mapStateToProps = (state: RootState) => ({
  languages: state.languages,
});

const mapDispatchToProps = { fetchLanguagesRequest };

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Terminal = (props: PropsFromRedux) => {
  let focusedInput: HTMLInputElement = null;

  const [command, setCommand] = useState('');
  const [results, setResults] = useState([]);

  const setFocusToMainInput = () => { focusedInput.focus(); };

  const handleFocusClick = (
    event: React.MouseEvent,
  ) => {
    event.preventDefault();
    setFocusToMainInput();
  };

  const handleFormSubmit = (
    event: React.FormEvent,
  ) => {
    event.preventDefault();

    const trimmedCMD = command.trim();

    switch (trimmedCMD) {
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
        setResults([...results, newResult]);
        break;
      }
      case COMMANDS.HELP: {
        const newResult = createResult({
          command,
          type: ResultType.DEFAULT,
          result: ['Available commands: ', 'show, clear, help'],
        });
        setResults([...results, newResult]);
        break;
      }
      case COMMANDS.SHOW_LANGUAGES: {
        const newResult = createResult({
          command,
          type: ResultType.DEFAULT,
          result: props.languages.data.map((lang) => lang.name),
        });
        setResults([...results, newResult]);
        break;
      }
      case COMMANDS.CLEAR: {
        setResults([]);
        break;
      }
      default: {
        const newErrorResult = createResult({
          command,
          type: ResultType.ERROR,
          result: [`Unknown command "${command}" found.`],
        });
        setResults([...results, newErrorResult]);
      }
    }

    setCommand(''); // clear command input
  };

  const handleCommandInputChange = (
    event: React.FormEvent<HTMLInputElement>,
  ) => {
    const { value } = event.currentTarget;
    setCommand(value);
  };

  useEffect(() => {
    props.fetchLanguagesRequest();
  }, []);

  useEffect(() => {
    setFocusToMainInput();
  }, [props]);

  const returnClass = (res: ResultType): string => {
    switch (res) {
      case ResultType.DEFAULT:
        return 'text-terminalGreen';
      case ResultType.ERROR:
        return 'text-red';
      default:
        return 'text-terminalGreen';
    }
  };

  const renderResults = () => results.map((result: TerminalResultProps, index) => (
    <Fragment key={index}>
      <span className="text-yellow">$ &nbsp;</span>
      <span className="text-white">{result.command.length < 1 ? 'EMPTY' : result.command}</span>
      {/* eslint-disable-next-line prefer-template */}
      { result.result.map((text: any) => <p className={returnClass(result.type) + ' ml-4'}>{text}</p>) }
    </Fragment>
  ));

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleFocusClick}
      onKeyDown={() => {}}
      style={{ maxHeight: '75vh' }}
      className="h-full w-full overflow-y-scroll content-start p-5 rounded bg-terminalGray"
    >
      {renderResults()}
      <form onSubmit={handleFormSubmit} autoComplete="off" className="flex flex-row">
        <span className="text-yellow">$ &nbsp;</span>
        <input
          className="flex-1 outline-none text-white bg-terminalGray"
          value={command}
          onChange={handleCommandInputChange}
          type="text"
          spellCheck={false}
          placeholder="/* use help for your guide */"
          ref={(input) => { focusedInput = input; }}
        />
      </form>
    </div>
  );
};

export default connector(Terminal);
