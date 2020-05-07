import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ ariaLabel, label, name, placeholder }) => {
  const [value, setValue] = useState('');

  return (
    <div>
      <form>
        <label htmlFor={name}>{label}</label>
        <input
          type='text'
          id={name}
          name={name}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          value={value}
          aria-label={ariaLabel}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default SearchBar;
