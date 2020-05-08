import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../actions/fetchRestaurants';
import SearchInput from '../components/SearchInput/SearchInput';
import { store } from '../index';

const App = ({ history }) => {
  console.log(store.getState());

  const dispatch = useDispatch();
  const error = useSelector((state) => state.fetchRestaurants.error.message);

  return (
    <div className='wrapper'>
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
