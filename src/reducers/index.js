import { combineReducers } from 'redux';
import fetchRestaurants from './fetchRestaurants';
import setRestaurants from './setRestaurants';

const rootReducer = () =>
  combineReducers({
    fetchRestaurants,
    setRestaurants,
  });

export default rootReducer;
