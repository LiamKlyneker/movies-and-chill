import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { Heading, Label } from 'luar-components';

const CharacterHeader = ({ movieInfo }) => {
  return (
    <div className={cx('detailPageHeader')}>
      <div>
        <Link to="/">
          <span role="img" aria-label="Back">
            🔙
          </span>
        </Link>
      </div>
      <div>
        <Heading as="h3">{movieInfo.title}</Heading>
        <Label theme="bold">{movieInfo.tagline.toUpperCase()}</Label>
      </div>
    </div>
  );
};

export default CharacterHeader;
