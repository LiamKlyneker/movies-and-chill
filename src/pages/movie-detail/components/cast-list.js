import React from 'react';
import { useSelector } from 'react-redux';

import { Label } from 'luar-components';
import CastTile from './cast-tile';
import styles from './styles.module.scss';

import { selectMoviesData } from '#modules/Movies/selectors';

const CastList = () => {
  const { movieCredits } = useSelector(selectMoviesData());
  return (
    <div className={styles.castList}>
      <Label theme="bold">CAST</Label>
      {!movieCredits.isFetching && (
        <div className={styles.list}>
          {movieCredits.info.cast.map(cast => (
            <CastTile data={cast} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CastList;
