import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import cx from 'classnames';

import CharacterTile from './character-tile';

import styles from './styles.module.scss';

import { selectCharactersData } from '#modules/Characters/selectors';

const ListSection = () => {
  /* Selectors */
  const { charactersList } = useSelector(selectCharactersData());
  const history = useHistory();

  /* Methods */
  const handleClick = character => {
    const splitUrl = character.url.split('/');
    history.push(`/people/${splitUrl[splitUrl.length - 2]}`);
  };

  return (
    <>
      {/* <div className="container container--full"> */}
      <section className={cx(styles.list)}>
        {charactersList.list.map(character => (
          <CharacterTile
            key={character.name}
            character={character}
            onClick={() => handleClick(character)}
          />
        ))}
      </section>
      {/* </div> */}
    </>
  );
};

export default ListSection;
