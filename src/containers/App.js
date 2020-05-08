import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchRestaurants } from '../actions/fetchRestaurants';
import SearchInput from '../components/SearchInput/SearchInput';
import Footer from '../components/Footer/Footer';
import { StyledDiv } from './App.styles';

const App = ({ history }) => {
  const dispatch = useDispatch();

  return (
    <>
      <StyledDiv>
        <h1>Good Eats</h1>
        <h3>Find local restaurants in your city</h3>
        <SearchInput
          ariaLabel='Enter name of city to find restaurants'
          label='City'
          name='city'
          onSubmit={(value) => dispatch(fetchRestaurants(value, history))}
          placeholder='Enter city'
        />
      </StyledDiv>
      <Footer />
    </>
  );
};

export default App;
