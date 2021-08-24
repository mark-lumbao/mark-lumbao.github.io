import {
  useEffect, useState, useRef, FormEvent,
} from 'react';
import { TerminalResultProps, TerminalProps } from './types';
import * as UTILS from './utils';

export const prompt = 'λ';

const Terminal = ({ data, className = '', ...others }: TerminalProps) => {
  const focusedInput = useRef();
  const scrollableContainer = useRef();

  const [command, setCommand] = useState('');
  const [results, setResults] = useState<TerminalResultProps[]>([]);

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

  useEffect(() => { // scroll to bottom on each render
    const container = scrollableContainer.current as HTMLDivElement;
    window.scrollTo(0, container.scrollHeight);
  });

  useEffect(() => { // focus input on initial load
    UTILS.setFocusToInput(focusedInput.current);
  }, []);

  return (
    <div
      {...others}
      ref={scrollableContainer}
      className={`terminal ${className}`}
      role="presentation"
      aria-label="Website Terminal"
      onKeyDown={() => {}}
    >
      {UTILS.jsxResultFactory(results)}
      <form onSubmit={handleFormSubmit} autoComplete="off">
        <span className="terminal--prompt">
          {`${prompt} `}
          &nbsp;
        </span>
        <input
          className="terminal--input"
          value={command}
          onChange={handleCommandInputChange}
          type="text"
          spellCheck={false}
          placeholder="/* Enter help command for your guide */"
          ref={focusedInput}
        />
      </form>
    </div>
  );
};

export default Terminal;
