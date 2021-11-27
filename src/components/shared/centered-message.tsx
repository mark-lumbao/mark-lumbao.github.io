import { ComponentType, HtmlHTMLAttributes } from 'react';

export interface IMessage extends HtmlHTMLAttributes<HTMLDivElement> {
  message: string;
}

const CenteredMessage: ComponentType<IMessage> = ({
  message,
  className,
  ...htmlAttribs
}: IMessage) => (
  <div className={`text--loading ${className}`} {...htmlAttribs}>
    <h3>{message}</h3>
  </div>
);

export default CenteredMessage;
