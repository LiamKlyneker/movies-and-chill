import React from 'react';
import cx from 'classnames';

import { Label, Divider, BodyText } from 'luar-components';

const CharacterDetails = ({ movieInfo }) => {
  return (
    <div className={cx('detailPageInfo')}>
      <Label theme="bold">OVERVIEW</Label>
      <BodyText>{movieInfo.overview}</BodyText>
      <Divider />

      <Label theme="bold">RELEASE</Label>
      <BodyText>{movieInfo.release_date}</BodyText>
      <Divider />

      <Label theme="bold">ORIGINAL TITLE</Label>
      <BodyText>{movieInfo.original_title}</BodyText>
      <Divider />

      <Label theme="bold">DURATION</Label>
      <BodyText>{movieInfo.runtime} MIN</BodyText>
      <Divider />

      <Label theme="bold">POPULARITY</Label>
      <BodyText>{movieInfo.popularity}</BodyText>
      <Divider />

      <Label theme="bold">AVERAGE VOTE</Label>
      <BodyText>
        {movieInfo.vote_average} ({movieInfo.vote_count})
      </BodyText>
      <Divider />
    </div>
  );
};

export default CharacterDetails;
