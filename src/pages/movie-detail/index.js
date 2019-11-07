import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cx from 'classnames';

import { Picture, Loader } from 'luar-components';
import DetailPageHeader from './components/detail-page-header';
import DetailPageInfo from './components/detail-page-info';

import { useActions } from '#utils';
import { selectMoviesData } from '#modules/Movies/selectors';
import { getMovieDetail } from '#modules/Movies/actions';

const MovieDetail = () => {
  // Selectors
  const { movieId } = useParams();
  const { movieDetail } = useSelector(selectMoviesData());

  /* Actions */
  const actions = useActions({ getMovieDetail });

  /* Effects */
  useEffect(() => {
    actions.getMovieDetail({ movieId });
  }, []);

  const childProps = {
    movieInfo: movieDetail.info,
  };

  return (
    <main>
      <div className="container container--full">
        {movieDetail.isFetching && <Loader />}
        {!movieDetail.isFetching && (
          <div className={cx('detailPageMainContainer')}>
            {window.screen.width < 700 && <DetailPageHeader {...childProps} />}
            <div className={cx('detailPageDesktopLeftSide')}>
              <Picture theme="movie-tile" source={movieDetail.info.poster_path} />
            </div>
            <div className={cx('detailPageDesktopRightSide')}>
              {window.screen.width >= 700 && <DetailPageHeader {...childProps} />}
              <DetailPageInfo {...childProps} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default MovieDetail;
