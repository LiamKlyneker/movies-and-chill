import React from 'react';
import cx from 'classnames';

const Label = ({ children, noMargin, theme }) => {
  return (
    <p className={cx('label', { 'no-margin': noMargin, [`label-${theme}`]: theme })}>
      {children}
    </p>
  );
};

export default Label;
