import React from 'react';
import SearchBar from '../components/SearchBar';

const App = () => {
  return (
    <div>
      <SearchBar
        ariaLabel='Enter name of city to find restaurants'
        label='City'
        name='city'
        placeholder='ie. Toronto'
      />
    </div>
  );
};

export default App;
