import React from 'react';

export interface CenteredMessageProps {
  message: string;
}

export default ({ message }: CenteredMessageProps) => (
  <div className="h-screen flex justify-center items-center">
    <h1>{message}</h1>
  </div>
);
