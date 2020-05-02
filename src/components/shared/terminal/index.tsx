import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from 'store/reducers';
import { fetchLanguagesRequest } from 'store/actions/languages';
import { fetchEmploymentRequest } from 'store/actions/employment';
import { fetchBioRequest } from 'store/actions/bio';
import { TerminalResultProps } from './types';
import * as UTILS from './utils';

// TODO: Implement other Sagas for other Fetches

const mapStateToProps = (state: RootState) => ({
  languages: state.languages,
});

const mapDispatchToProps = {
  fetchLanguagesRequest,
  fetchBioRequest,
  fetchEmploymentRequest,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;

const Terminal = (props: PropsFromRedux) => {
  let focusedInput: HTMLInputElement = null;
  let scrollableContainer: HTMLDivElement = null;

  const [command, setCommand] = useState('');
  const [results, setResults] = useState<TerminalResultProps[]>([]);

  const handleFocusClick = (
    event: React.MouseEvent,
  ) => {
    event.preventDefault();
    UTILS.setFocusToInput(focusedInput);
  };

  const handleFormSubmit = (
    event: React.FormEvent,
  ) => {
    event.preventDefault();

    if (!UTILS.resultFactory(command.trim(), props)) {
      setResults([]);
    } else {
      setResults([...results, UTILS.resultFactory(command.trim(), props)]);
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
    props.fetchBioRequest();
    props.fetchEmploymentRequest();
  }, []); // runs once

  useEffect(() => { // runs everytime the component renders
    UTILS.setFocusToInput(focusedInput);
    UTILS.scrollContainerToBottom(scrollableContainer);
  });

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleFocusClick}
      onKeyDown={() => {}}
      style={{ maxHeight: '75vh' }}
      className="h-full w-full overflow-y-scroll content-start p-5 rounded bg-terminalGray"
      ref={(div) => { scrollableContainer = div; }}
    >
      {UTILS.jsxResultFactory(results)}
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
