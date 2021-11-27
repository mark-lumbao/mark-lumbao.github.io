import { ComponentType, HtmlHTMLAttributes } from 'react';
import TerminalResult, {
  ITerminalResult,
} from 'components/shared/terminal/partials/result';

export interface ITerminalResults extends HtmlHTMLAttributes<HTMLDivElement> {
  data: ITerminalResult[];
}

const TerminalResults: ComponentType<ITerminalResults> = ({
  data,
  ...htmlAttribs
}: ITerminalResults) => (
  <div {...htmlAttribs}>
    {data.map((result, index) => (
      <TerminalResult {...result} key={index} />
    ))}
  </div>
);

export default TerminalResults;
