import {
  useEffect,
  useState,
  useRef,
  HtmlHTMLAttributes,
  ComponentType,
} from 'react';
import { setFocusToInput, scrollToBottom } from 'utils';
import { resultFactory } from 'components/shared/terminal/utils';
import TerminalResults from 'components/shared/terminal/partials/results';
import TerminalPrompt from 'components/shared/terminal/partials/prompt';
import { ITerminalResult } from 'components/shared/terminal/partials/result';

export interface ITerminalData {
  command: string;
  result: any; // TODO Obliterate this nasty any
  type?: 'string-list' | 'object';
}

export interface ITerminal extends HtmlHTMLAttributes<HTMLDivElement> {
  data: ITerminalData[];
}

const Terminal: ComponentType<ITerminal> = ({
  data,
  className = '',
  ...others
}: ITerminal) => {
  const focusedInput = useRef();
  const scrollableContainer = useRef();

  const [command, setCommand] = useState('');
  const [results, setResults] = useState<ITerminalResult[]>([]);

  const handleFormSubmit = () => {
    if (!resultFactory(command.trim(), data)) {
      setResults([]); // COMMAND CLEAR RETURNS A NULL VALUE
    } else {
      setResults([...results, resultFactory(command.trim(), data)]);
    }

    setCommand(''); // clear command input
  };

  useEffect(() => {
    scrollToBottom(scrollableContainer.current); // scroll to bottom on each render
  });

  useEffect(() => {
    setFocusToInput(focusedInput.current); // focus input on initial load
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
      <TerminalResults data={results} />
      <TerminalPrompt
        ref={focusedInput}
        handleCommandChange={(value) => setCommand(value)}
        handleCommandSubmit={() => handleFormSubmit()}
        command={command}
      />
    </div>
  );
};

export default Terminal;
