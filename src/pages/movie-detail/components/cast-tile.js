import React from 'react';
import { Avatar, BodyText, Label, Strong, Divider } from 'luar-components';
import styles from './styles.module.scss';

const CastTile = ({ data }) => {
  return (
    <div className={styles.castTile}>
      <Avatar theme="cast" src={data.profile_path} />
      <BodyText>{data.name}</BodyText>
      <Label>
        AS <Strong>{data.character.toUpperCase()}</Strong>
      </Label>
    </div>
  );
};

export default CastTile;
