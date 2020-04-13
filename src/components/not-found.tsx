import React from 'react';
import { useLocation } from 'react-router-dom';
import CenteredMessage from 'components/shared/centered-message';

export default () => {
  const location = useLocation();
  return (
    <CenteredMessage message={`Page ${location.pathname} Not Found`} />
  );
};
