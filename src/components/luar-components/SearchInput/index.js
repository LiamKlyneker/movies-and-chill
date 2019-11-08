import React from 'react';
import cx from 'classnames';

const SearchInput = ({ placeholder, value, onChange, performSearch }) => {
  return (
    <div className={cx('searchInputWrapper')}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={event => onChange(event.target.value)}
        onKeyDown={event => event.key === 'Enter' && performSearch()}
      />
      {value && <button onClick={performSearch}>SEARCH</button>}
    </div>
  );
};

export default SearchInput;
