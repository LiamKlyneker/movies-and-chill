import React from 'react';
import cx from 'classnames';

const BodyText = ({ children, size }) => {
  return <p className={cx('bodyText', { [`bodyText-${size}`]: size })}>{children}</p>;
};

export default BodyText;
