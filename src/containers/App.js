import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../actions/fetchRestaurants';
import SearchBar from '../components/SearchBar';

const App = () => {
  const dispatch = useDispatch();
  // const error = useSelector((state) => state.error);
  const state = useSelector((state) => state.data);
  console.log(state);
  return (
    <div>
      <SearchBar
        ariaLabel='Enter name of city to find restaurants'
        label='City'
        name='city'
        onSubmit={(value) => dispatch(fetchRestaurants(value))}
        placeholder='ie. Toronto'
      />
    </div>
  );
};

export default App;
