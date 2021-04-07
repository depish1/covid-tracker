import React from 'react';
import { theme } from 'assets/styles/theme';

import { Wrapper, RingSpinner } from './StyledLoader';

const Loader = ({ color, size, sizeUnit }) => (
  <Wrapper>
    <RingSpinner color={color} size={size} sizeUnit={sizeUnit} />
  </Wrapper>
);

Loader.defaultProps = {
  size: 100,
  color: theme.colors.primaryColor,
  sizeUnit: 'px',
};

export default Loader;
