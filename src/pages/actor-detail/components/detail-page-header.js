import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { Heading, Label } from 'luar-components';

const DetailPageHeader = ({ personInfo }) => {
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
        <Heading as="h3">{personInfo.name}</Heading>
        <Label theme="bold">{personInfo.known_for_department.toUpperCase()}</Label>
      </div>
    </div>
  );
};

export default DetailPageHeader;
