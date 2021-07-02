import { TerminalResultProps, ResultType } from 'components/shared/terminal/types';
import { prompt } from 'components/shared/terminal';

interface TerminalResultComponentProps {
  result: TerminalResultProps
}

const TerminalResultComponent = (
  { result: { command, type, result } }: TerminalResultComponentProps,
) => {
  const hasLink = type === ResultType.LINK;
  const hasError = type === ResultType.ERROR;
  return (
    <>
      <span className="terminal--prompt">
        {`${prompt} `}
        &nbsp;
      </span>
      <span className="terminal--text">{command.length < 1 ? 'EMPTY' : command}</span>
      <div className="terminal--result">
        { result.map(({ value, link }, key) => (
          <p
            key={key}
            className={hasError ? 'terminal--result__error' : ''}
            style={{ cursor: hasLink && 'pointer', width: 'max-content' }}
            onClick={() => hasLink && window.open(link)}
            onKeyDown={() => {}}
            role="presentation"
          >
            <span className={hasLink ? 'hover:underline' : ''}>{value}</span>
          </p>
        )) }
      </div>
    </>
  );
};

export default TerminalResultComponent;
