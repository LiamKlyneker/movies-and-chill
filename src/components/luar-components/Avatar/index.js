import React from 'react';
import cx from 'classnames';

const Avatar = ({ src, theme }) => {
  return (
    <figure className={cx({ 'avatar-profile': !theme, [`avatar-${theme}`]: theme })}>
      <img src={!theme ? src : `http://image.tmdb.org/t/p/original${src}`} alt="avatar" />
    </figure>
  );
};

export default Avatar;
