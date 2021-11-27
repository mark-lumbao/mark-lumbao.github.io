import { forwardRef } from 'react';
import PromptSymbol from './symbol';

export interface ITerminalPrompt {
  handleCommandSubmit: (command?: string) => void;
  handleCommandChange: (command?: string) => void;
  command: string;
}

const TerminalPrompt = forwardRef<HTMLInputElement, ITerminalPrompt>(
  (
    { handleCommandChange, handleCommandSubmit, command }: ITerminalPrompt,
    ref,
  ) => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleCommandSubmit(e.currentTarget.value);
      }}
      autoComplete="off"
    >
      <PromptSymbol />
      <input
        className="terminal--input"
        value={command}
        onChange={({ currentTarget: { value } }) => handleCommandChange(value)}
        type="text"
        spellCheck={false}
        placeholder="/* Enter help command for your guide */"
        ref={ref}
      />
    </form>
  ),
);

export default TerminalPrompt;
