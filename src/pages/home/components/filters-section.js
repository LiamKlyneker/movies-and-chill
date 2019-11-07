import React, { useState } from 'react';
import cx from 'classnames';

import { SearchInput } from 'luar-components';

import styles from './styles.module.scss';

import { getMoviesBySearch } from '#modules/Movies/actions';
import { useActions } from '#utils';

const FiltersSection = () => {
  /* States */
  const [searchText, setSearchText] = useState('');

  /* Actions */
  const actions = useActions({ getMoviesBySearch });

  /* Methods */
  const handlePerformSearch = () => {
    actions.getMoviesBySearch({ searchText });
  };

  return (
    <div className={cx(styles.filtersSection)}>
      <SearchInput
        placeholder="Search your favorite Movie..."
        value={searchText}
        onChange={value => setSearchText(value)}
        performSearch={handlePerformSearch}
      />
    </div>
  );
};

export default FiltersSection;
