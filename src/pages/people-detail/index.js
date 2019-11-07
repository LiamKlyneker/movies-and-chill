import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cx from 'classnames';

import { Picture, Loader } from 'luar-components';
import CharacterHeader from './components/character-header';
import CharacterDetails from './components/character-details';
import styles from './components/styles.module.scss';

import { useActions } from '#utils';
import { selectCharactersData } from '#modules/Characters/selectors';
import { getCharacterDetail } from '#modules/Characters/actions';

const PeopleDetailPage = () => {
  // Selectors
  const { characterId } = useParams();
  const { characterDetail } = useSelector(selectCharactersData());

  /* Actions */
  const actions = useActions({ getCharacterDetail });

  /* Effects */
  useEffect(() => {
    actions.getCharacterDetail({ characterId });
  }, []);

  const childProps = {
    characterInfo: characterDetail.info,
  };

  return (
    <main>
      <div className="container container--full">
        {characterDetail.isFetching && <Loader />}
        {!characterDetail.isFetching && (
          <div className={cx(styles.mainContainer)}>
            {window.screen.width < 700 && <CharacterHeader {...childProps} />}
            <div className={cx(styles.desktopLeftSide)}>
              <Picture theme="character-picture" />
            </div>
            <div className={cx(styles.desktopRightSide)}>
              {window.screen.width >= 700 && <CharacterHeader {...childProps} />}
              <CharacterDetails {...childProps} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default PeopleDetailPage;
