import React from 'react';
import cx from 'classnames';

import { Button } from 'luar-components';
import styles from './styles.module.scss';

const FooterSection = ({ handleLoadMore, isFetchingMore }) => {
  return (
    <footer className={cx(styles.footer)}>
      <Button theme="secondary" onClick={handleLoadMore} disabled={isFetchingMore}>
        {!isFetchingMore ? 'LOAD MORE' : 'LOADING...'}
      </Button>
    </footer>
  );
};

export default FooterSection;
