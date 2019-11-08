import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cx from 'classnames';

import { Picture, Loader } from 'luar-components';
import DetailPageHeader from './components/detail-page-header';
import DetailPageInfo from './components/detail-page-info';
// import CastList from './components/cast-list';

import { useActions } from '#utils';
import { selectPersonData } from '#modules/Persons/selectors';
import { getPersonDetail } from '#modules/Persons/actions';

const ActorDetailPage = () => {
  // Selectors
  const { personId } = useParams();
  const { personDetail } = useSelector(selectPersonData());

  /* Actions */
  const actions = useActions({ getPersonDetail });

  /* Effects */
  useEffect(() => {
    actions.getPersonDetail({ personId });
  }, []);

  const childProps = {
    personInfo: personDetail.info,
  };
  console.log('actorDetail', personDetail);
  return (
    <main>
      <div className="container container--full">
        {personDetail.isFetching && <Loader />}
        {!personDetail.isFetching && (
          <div className={cx('detailPageMainContainer')}>
            {window.screen.width < 700 && <DetailPageHeader {...childProps} />}
            <div className={cx('detailPageDesktopLeftSide')}>
              <Picture theme="movie-tile" source={personDetail.info.profile_path} />
            </div>
            <div className={cx('detailPageDesktopRightSide')}>
              {window.screen.width >= 700 && <DetailPageHeader {...childProps} />}
              <DetailPageInfo {...childProps} />
              {/* <CastList /> */}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ActorDetailPage;
