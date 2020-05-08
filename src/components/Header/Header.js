import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFilterValue,
  filterRestaurants,
} from '../../actions/setRestaurants';
import SearchInput from '../SearchInput/SearchInput';
import { StyledHeader } from './Header.styles';

const Header = () => {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.setRestaurants);

  const handleSubmit = (value) => {
    dispatch(setFilterValue(value));
    dispatch(filterRestaurants(restaurants, value));
  };

  return (
    <div className='wrapper'>
      <StyledHeader>
        <h1>Good Eats</h1>
        <SearchInput
          ariaLabel='Enter filter by name, address or area'
          name='filter'
          onSubmit={handleSubmit}
          placeholder='Filter by name, address'
        />
        <nav>
          <Link to='/'> &#8592; Homepage</Link>
        </nav>
      </StyledHeader>
    </div>
  );
};

export default Header;
