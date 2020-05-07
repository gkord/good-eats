import {
  SET_CITY,
  SET_RESTAURANTS,
  SET_FILTER_VALUE,
  SET_FILTERED_RESTAURANTS,
} from '../constants';

const initialState = {
  restaurants: [],
  filteredRestaurants: [],
  city: '',
  filter: '',
};

const setRestaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload,
      };
    case SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case SET_FILTER_VALUE:
      return {
        ...state,
        filter: action.payload,
      };
    case SET_FILTERED_RESTAURANTS:
      return {
        ...state,
        filtered: action.payload,
      };
    default:
      return state;
  }
};

export default setRestaurantsReducer;
