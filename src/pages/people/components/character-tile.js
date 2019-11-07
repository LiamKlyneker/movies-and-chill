import React from 'react';
import cx from 'classnames';

import { Avatar, BodyText, Label, Strong } from 'luar-components';

import styles from './styles.module.scss';

const CharacterTile = ({ character, onClick }) => {
  return (
    <div className={cx(styles.characterTile)} onClick={onClick}>
      <div className={cx(styles.characterTile__avatar)}>
        <Avatar
          theme="character"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Rebel_Alliance_logo.svg/1200px-Rebel_Alliance_logo.svg.png"
        />
      </div>
      <div>
        <BodyText size="medium">{character.name}</BodyText>
        <Label noMargin>
          BORN DATE <Strong>{character.birth_year.toUpperCase()}</Strong>
        </Label>
      </div>
    </div>
  );
};

export default CharacterTile;
