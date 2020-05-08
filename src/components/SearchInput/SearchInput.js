import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { StyledForm, StyledInput, StyledButton } from './SearchInput.styles';

const SearchInput = ({ ariaLabel, label, name, onSubmit, placeholder }) => {
  const [value, setValue] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue('');

    history.push('/results');
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
