import React from 'react';
import { Avatar, BodyText, Label, Strong } from 'luar-components';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.scss';

const CastTile = ({ data }) => {
  const history = useHistory();

  return (
    <div className={styles.castTile} onClick={() => history.push(`/person/${data.id}`)}>
      <Avatar theme="cast" src={data.profile_path} />
      <BodyText>{data.name}</BodyText>
      <Label>
        AS <Strong>{data.character.toUpperCase()}</Strong>
      </Label>
    </div>
  );
};

export default CastTile;
