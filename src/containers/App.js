import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../actions/fetchRestaurants';
import SearchInput from '../components/SearchInput/SearchInput';

const App = ({ history }) => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.fetchRestaurants.error.message);

  return (
    <div className='wrapper'>
      <h1>Good Eats</h1>
      <h3>Find local restaurants in your city</h3>
      <SearchInput
        ariaLabel='Enter name of city to find restaurants'
        label='City'
        name='city'
        onSubmit={(value) => dispatch(fetchRestaurants(value, history))}
        placeholder='Enter city'
      />
      {error && (
        <p className='error' aria-live='assertive'>
          {error}
        </p>
      )}
    </div>
  );
};

export default App;
