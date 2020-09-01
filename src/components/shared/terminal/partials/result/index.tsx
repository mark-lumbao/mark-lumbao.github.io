import React from 'react';
import { TerminalResultProps, ResultType } from '../../types';
import { resolveClass } from '../../utils';

interface TerminalResultComponentProps {
  result: TerminalResultProps
}

const TerminalResultComponent = (
  { result: { command, type, result } }: TerminalResultComponentProps,
) => {
  const hasLink = type === ResultType.LINK;
  return (
    <>
      <span className="text-yellow">$ &nbsp;</span>
      <span className="text-terminalText">{command.length < 1 ? 'EMPTY' : command}</span>
      { result.map(({ value, link }, key) => (
        <p
          key={key}
          className={`${resolveClass(type)} ml-4`}
          style={{ cursor: hasLink && 'pointer' }}
          onClick={() => hasLink && window.open(link)}
          onKeyDown={() => {}}
          role="presentation"
        >
          <span className={hasLink && 'hover:underline'}>{value}</span>
        </p>
      )) }
    </>
  );
};

export default TerminalResultComponent;
