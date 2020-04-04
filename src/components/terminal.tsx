/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';

export interface TerminalResultProps {
  command: string;
  result: string;
}

const Terminal: React.FC = () => {
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

  const createResult = (
    props: TerminalResultProps,
  ): TerminalResultProps => props;

  const handleFormSubmit = (
    event: React.FormEvent,
  ) => {
    event.preventDefault();
    if (command === 'clear') {
      setResults([]);
    } else {
      const newResult = createResult({
        command,
        result: 'this is a placeholder result :p',
      });
      setResults([...results, newResult]);
    }
    setCommand(''); // clear command input
  };

  const handleCommandInputChange = (
    event: React.FormEvent<HTMLInputElement>,
  ) => {
    const { value } = event.currentTarget;
    setCommand(value);
  };

  useEffect(() => { setFocusToMainInput(); }, []);

  const renderResults = () => results.map((result: TerminalResultProps) => (
    <div>
      <span className="text-yellow">$ &nbsp;</span>
      <span className="text-white">{result.command}</span>
      <p className="text-terminalGreen ml-4">{result.result}</p>
    </div>
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
          placeholder="/* use list --commands & show available commands. */"
          ref={(input) => { focusedInput = input; }}
        />
      </form>
    </div>
  );
};

export default Terminal;
