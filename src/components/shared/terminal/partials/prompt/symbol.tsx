import { ComponentType, HtmlHTMLAttributes } from 'react';

const PromptSymbol: ComponentType<HtmlHTMLAttributes<HTMLSpanElement>> = (
  className,
  ...spanProps
) => (
  <span {...spanProps} className={`terminal--prompt ${className}`}>
    <span className="terminal--prompt__symbol">λ</span>
    &nbsp;
  </span>
);

export default PromptSymbol;
