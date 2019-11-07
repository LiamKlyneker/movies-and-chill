import React from 'react';
import cx from 'classnames';

import { baseUrl, apiKey } from '#services/api';

const Picture = ({ theme, source }) => {
  return (
    <figure className={cx('picture', { [theme]: theme })}>
      <img alt={theme} src={`http://image.tmdb.org/t/p/original${source}`} />
    </figure>
  );
};

export default Picture;
