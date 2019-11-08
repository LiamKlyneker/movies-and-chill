import React from 'react';
import cx from 'classnames';

import { Label, Divider, BodyText } from 'luar-components';

const DetailPageInfo = ({ personInfo }) => {
  return (
    <div className={cx('detailPageInfo')}>
      <Label theme="bold">BIRTHDAY</Label>
      <BodyText>{personInfo.birthday}</BodyText>
      <Divider />

      <Label theme="bold">PLACE OF BIRTH</Label>
      <BodyText>{personInfo.place_of_birth}</BodyText>
      <Divider />

      <Label theme="bold">BIOGRAPHY</Label>
      <BodyText>{personInfo.biography}</BodyText>
    </div>
  );
};

export default DetailPageInfo;
