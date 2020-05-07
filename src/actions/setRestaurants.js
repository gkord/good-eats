import {
  SET_RESTAURANTS,
  FILTER_RESTAURANTS,
  SET_FILTER_VALUE,
  SET_CITY,
} from '../constants';

export const setRestaurants = () => ({
  type: SET_RESTAURANTS,
});

export const filterRestaurants = () => ({
  type: FILTER_RESTAURANTS,
});

export const setFilterValue = (payload) => ({
  type: SET_FILTER_VALUE,
  payload,
});

export const setCity = (payload) => ({
  type: SET_CITY,
  payload,
});
