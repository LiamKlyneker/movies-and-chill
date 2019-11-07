import React from 'react';
import cx from 'classnames';

import { Label, Divider, BodyText } from 'luar-components';

import styles from './styles.module.scss';

const CharacterDetails = ({ characterInfo }) => {
  return (
    <div className={cx(styles.characterDetails)}>
      <Label theme="bold">GENDER</Label>
      <BodyText>{characterInfo.gender}</BodyText>
      <Divider />

      <Label theme="bold">EYE COLOR</Label>
      <BodyText>{characterInfo.eye_color}</BodyText>
      <Divider />

      <Label theme="bold">HAIR COLOR</Label>
      <BodyText>{characterInfo.hair_color}</BodyText>
      <Divider />

      <Label theme="bold">HEIGHT</Label>
      <BodyText>{characterInfo.height}</BodyText>
      <Divider />

      <Label theme="bold">MASS</Label>
      <BodyText>{characterInfo.mass}</BodyText>
      <Divider />

      <Label theme="bold">SKIN COLOR</Label>
      <BodyText>{characterInfo.skin_color}</BodyText>
      <Divider />
    </div>
  );
};

export default CharacterDetails;
