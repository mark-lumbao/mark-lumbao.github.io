/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { TerminalResultProps, TerminalProps } from './types';
import * as UTILS from './utils';

const Terminal = ({ data, ...others }: TerminalProps) => {
  let focusedInput: HTMLInputElement = null;
  let scrollableContainer: HTMLDivElement = null;

  const [command, setCommand] = useState('');
  const [results, setResults] = useState<TerminalResultProps[]>([]);

  const handleFocusClick = (event: React.MouseEvent) => {
    event.preventDefault();
    UTILS.setFocusToInput(focusedInput);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!UTILS.resultFactory(command.trim(), data)) {
      setResults([]); // COMMAND CLEAR RETURNS A NULL VALUE
    } else {
      setResults([...results, UTILS.resultFactory(command.trim(), data)]);
    }

    setCommand(''); // clear command input
  };

  const handleCommandInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setCommand(value);
  };

  useEffect(() => { // runs everytime the component renders
    UTILS.setFocusToInput(focusedInput);
    UTILS.scrollContainerToBottom(scrollableContainer);
  });

  return (
    <div
      {...others}
      role="button"
      aria-label="Website Terminal"
      tabIndex={0}
      onClick={handleFocusClick}
      onKeyDown={() => {}}
      style={{ maxHeight: '75vh' }}
      ref={(div) => { scrollableContainer = div; }}
    >
      {UTILS.jsxResultFactory(results)}
      <form onSubmit={handleFormSubmit} autoComplete="off" className="flex flex-row">
        <span className="text-yellow">$ &nbsp;</span>
        <input
          id="terminal-input"
          className="flex-1 outline-none text-terminalText bg-terminalBlack"
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

export default Terminal;
