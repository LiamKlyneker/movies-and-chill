import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';

import { Loader } from 'luar-components';
import MovieTile from './movie-tile';
import EmptyState from './empty-state';

import styles from './styles.module.scss';

import { selectMoviesData } from '#modules/Movies/selectors';

const ResultsSection = () => {
  /* Selectors */
  const { moviesSearchList, currentSearchText } = useSelector(selectMoviesData());
  const history = useHistory();

  /* Methods */
  const handleClick = movie => {
    history.push(`/movie/${movie.id}`);
  };

  return (
    <>
      {moviesSearchList.isFetching && <Loader />}
      {moviesSearchList.list.length > 0 && (
        <section className={cx(styles.list)}>
          {moviesSearchList.list.map(movie => (
            <MovieTile key={movie.id} movie={movie} onClick={() => handleClick(movie)} />
          ))}
        </section>
      )}
      {!moviesSearchList.isFetching &&
        moviesSearchList.list.length === 0 &&
        currentSearchText && <EmptyState searchText={currentSearchText} />}
    </>
  );
};

export default ResultsSection;
