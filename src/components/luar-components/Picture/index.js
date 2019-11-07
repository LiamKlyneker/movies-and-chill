import React from 'react';
import cx from 'classnames';

const Picture = ({ theme }) => {
  return (
    <div className={cx(theme)}>
      <span>
        CHARACTER PICTURES ONLY AVAILABLE FOR <br />
        PREMIUM USERS
      </span>
    </div>
  );
};

export default Picture;
