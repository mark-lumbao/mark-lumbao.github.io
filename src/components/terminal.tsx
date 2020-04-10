import React, { Fragment, useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as COMMANDS from 'constants/commands';
import { RootState } from 'store/reducers';
import { fetchLanguagesRequest } from 'store/actions/languages';

// RECAP: Implemented Saga for Languages Fetch
// TODO: Implement other Sagas for other Fetches

export interface TerminalResultProps {
  command: string;
  result: string;
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
  let focusedInput: any = null;
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

    switch (command) {
      case COMMANDS.CLEAR: {
        setResults([]);
        break;
      }
      case COMMANDS.SHOW: {
        props.fetchLanguagesRequest();
        const newResult = createResult({
          command,
          type: ResultType.DEFAULT,
          result: `This is a placeholder result for: ${command}.`,
        });
        setResults([...results, newResult]);
        break;
      }
      default: {
        const newErrorResult = createResult({
          command,
          type: ResultType.ERROR,
          result: `Unknown command "${command}" found.`,
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
    // eslint-disable-next-line no-console
    console.log('Languages: ', props.languages);
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
      <span className="text-white">{result.command.length < 2 ? 'EMPTY' : result.command}</span>
      {/* eslint-disable-next-line prefer-template */}
      <p className={returnClass(result.type) + ' ml-4'}>{result.result}</p>
    </Fragment>
  ));

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleFocusClick}
      onKeyDown={() => {}}
      style={{ maxHeight: '80vh' }}
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
