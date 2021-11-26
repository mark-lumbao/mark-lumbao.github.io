import { TerminalResultProps } from 'components/shared/terminal/types';
import TerminalResult from 'components/shared/terminal/partials/result';

export type TerminalResultsProps = { data: TerminalResultProps[] };
const TerminalResults = ({ data: results }: TerminalResultsProps) => (
  <div>
    {results.map((result, index) => (
      <TerminalResult result={result} key={index} />
    ))}
  </div>
);

export default TerminalResults;
