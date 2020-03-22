import React from 'react';

import BaseLayout from './base';

const Float = (props) => {
  const { children, ...rest } = props;

  return (
    <BaseLayout position='absolute' zIndex={1} {...rest}>
      {children}
    </BaseLayout>
  );
};

export default Float;
