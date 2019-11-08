import React from 'react';
import { useSelector } from 'react-redux';

import { Label } from 'luar-components';
import MovieTile from './movie-tile';
import styles from './styles.module.scss';

import { selectPersonData } from '#modules/Persons/selectors';

const MoviesList = ({ onClick }) => {
  const { movieCredits } = useSelector(selectPersonData());
  console.log('movieCredits', movieCredits);
  return (
    <div className={styles.moviesList}>
      <Label theme="bold">CAST</Label>
      {!movieCredits.isFetching && (
        <div className={styles.list}>
          {movieCredits.info.cast.map(cast => (
            <MovieTile data={cast} onClick={onClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MoviesList;
