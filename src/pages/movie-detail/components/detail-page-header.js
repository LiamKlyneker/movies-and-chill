import React from 'react';
import cx from 'classnames';
import { useHistory } from 'react-router-dom';
import { Heading, Label, Icon } from 'luar-components';

const DetailPageHeader = ({ movieInfo }) => {
  const history = useHistory();
  return (
    <div className={cx('detailPageHeader')}>
      <div>
        <button onClick={() => history.goBack()}>
          <Icon icon="keyboard_backspace" />
        </button>
      </div>
      <div>
        <Heading as="h3">{movieInfo.title}</Heading>
        <Label theme="bold">{movieInfo.tagline.toUpperCase()}</Label>
      </div>
    </div>
  );
};

export default DetailPageHeader;
