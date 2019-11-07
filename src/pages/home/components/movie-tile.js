import React from 'react';
import cx from 'classnames';

import { BodyText, Label, Picture } from 'luar-components';

import styles from './styles.module.scss';

const CharacterTile = ({ movie, onClick }) => {
  return (
    <div className={cx(styles.movieTile)} onClick={onClick}>
      <Picture theme="movie-tile" source={movie.poster_path} />
      <div className={cx(styles.movieTile__body)}>
        <BodyText size="medium">{movie.title}</BodyText>
        <Label noMargin theme="bold">
          {movie.release_date}
        </Label>
      </div>
    </div>
  );
};

export default CharacterTile;
