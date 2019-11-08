import React from 'react';
import cx from 'classnames';

import { Heading } from 'luar-components';

import styles from './styles.module.scss';

const EmptyState = ({ searchText }) => {
  return (
    <div className={cx(styles.emptyState)}>
      <Heading as="h2" className="text-center">
        No results for {searchText}, try something else n.n
      </Heading>
    </div>
  );
};

export default EmptyState;
