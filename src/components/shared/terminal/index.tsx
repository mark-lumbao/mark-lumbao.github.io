import {
  useEffect, useState, MouseEvent, FormEvent,
} from 'react';
import { TerminalResultProps, TerminalProps } from './types';
import * as UTILS from './utils';

const Terminal = ({ data, scrollableContainer, ...others }: TerminalProps) => {
  let focusedInput: HTMLInputElement = null;

  const [command, setCommand] = useState('');
  const [results, setResults] = useState<TerminalResultProps[]>([]);

  const handleFocusClick = (event: MouseEvent) => {
    event.preventDefault();
    UTILS.setFocusToInput(focusedInput);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!UTILS.resultFactory(command.trim(), data)) {
      setResults([]); // COMMAND CLEAR RETURNS A NULL VALUE
    } else {
      setResults([...results, UTILS.resultFactory(command.trim(), data)]);
    }

    setCommand(''); // clear command input
  };

  const handleCommandInputChange = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setCommand(value);
  };

  useEffect(() => { // runs everytime the component renders
    UTILS.setFocusToInput(focusedInput);
    if (scrollableContainer) UTILS.scrollContainerToBottom(scrollableContainer);
  });

  return (
    <div
      {...others}
      className={`terminal ${others.className}`}
      role="presentation"
      aria-label="Website Terminal"
      onClick={handleFocusClick}
      onKeyDown={() => {}}
    >
      {UTILS.jsxResultFactory(results)}
      <form onSubmit={handleFormSubmit} autoComplete="off" className="flex flex-row pb-5">
        <span className="terminal---prompt">
          {'> '}
          &nbsp;
        </span>
        <input
          className="terminal--input"
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
