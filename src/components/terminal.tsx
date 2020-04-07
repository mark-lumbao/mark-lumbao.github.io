import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as COMMANDS from 'constants/commands';
import { RootState } from 'reducers/';
import { fetchLanguages } from 'actions/languages';

// TODO create SAGAS and connect it here

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

const mapDispathToProps = { fetchLanguages };

const connector = connect(mapStateToProps, mapDispathToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const Terminal = (props: PropsFromRedux) => {
  let focusedInput: any = null;
  const [command, setCommand] = useState(undefined);
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
        const newResult = createResult({
          command,
          type: ResultType.DEFAULT,
          result: `This is a placeholder result for: ${command}.`,
        });
        props.fetchLanguages();
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
  }, []);

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

  const renderResults = () => results.map((result: TerminalResultProps) => (
    <>
      <span className="text-yellow">$ &nbsp;</span>
      <span className="text-white">{result.command}</span>
      {/* eslint-disable-next-line prefer-template */}
      <p className={returnClass(result.type) + ' ml-4'}>{result.result}</p>
    </>
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
      <form onSubmit={handleFormSubmit} className="flex flex-row">
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
