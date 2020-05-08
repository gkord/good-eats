import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledForm, StyledInput, StyledButton } from './SearchInput.styles';

const SearchInput = ({ ariaLabel, name, onSubmit, placeholder }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type='text'
        id={name}
        name={name}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        value={value}
        aria-label={ariaLabel}
        required
      />
      <StyledButton>Search</StyledButton>
    </StyledForm>
  );
};

SearchInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default SearchInput;
