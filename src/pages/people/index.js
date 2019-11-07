import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Loader } from 'luar-components';
import ListSection from './components/list-section';
import FooterSection from './components/footer-section';

import { useActions } from '#utils';
import { selectCharactersData } from '#modules/Characters/selectors';
import {
  getCharactersList,
  getMoreCharactersToTheList,
} from '#modules/Characters/actions';

const PeoplePage = () => {
  /* Selectors */
  const { charactersList } = useSelector(selectCharactersData());

  /* Actions */
  const actions = useActions({
    getCharactersList,
    getMoreCharactersToTheList,
  });

  /* Effects */
  useEffect(() => {
    if (charactersList.isFetching) actions.getCharactersList();
  }, []);

  /* Methods */
  const handleLoadMore = () =>
    actions.getMoreCharactersToTheList({ urlNext: charactersList.meta.next });

  return (
    <main>
      <div className="container">
        <h2>Characters List</h2>
        {charactersList.isFetching && <Loader />}
        {!charactersList.isFetching && <ListSection />}
        {!charactersList.isFetching && (
          <FooterSection
            handleLoadMore={handleLoadMore}
            isFetchingMore={charactersList.isFetchingMore}
          />
        )}
      </div>
    </main>
  );
};

export default PeoplePage;
