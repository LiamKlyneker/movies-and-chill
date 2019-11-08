import React from 'react';
import { Picture, BodyText, Label, Strong } from 'luar-components';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.scss';

const MovieTile = ({ data }) => {
  const history = useHistory();

  return (
    <div className={styles.movieTile} onClick={() => history.push(`/movie/${data.id}`)}>
      <Picture theme="movie-tile-small" source={data.poster_path} />
      <div className={styles.movieTile__body}>
        <BodyText>{data.title}</BodyText>
        <Label>
          AS <Strong>{data.character.toUpperCase()}</Strong>
        </Label>
      </div>
    </div>
  );
};

export default MovieTile;
