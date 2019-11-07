import React from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { Heading, Label, Strong } from 'luar-components';

import styles from './styles.module.scss';

const CharacterHeader = ({ characterInfo }) => {
  return (
    <div className={cx(styles.characterHeader)}>
      <div>
        <Link to="/people">
          <span role="img" aria-label="Back">
            🔙
          </span>
        </Link>
      </div>
      <div>
        <Heading as="h3">{characterInfo.name}</Heading>
        <Label>
          BORN DATE <Strong>{characterInfo.birth_year}</Strong>
        </Label>
      </div>
    </div>
  );
};

export default CharacterHeader;
