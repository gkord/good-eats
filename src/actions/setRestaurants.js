import {
  SET_RESTAURANTS,
  SET_CITY,
  SET_FILTER_VALUE,
  SET_FILTERED_RESTAURANTS,
} from '../constants';

export const setRestaurants = (payload) => ({
  type: SET_RESTAURANTS,
  payload,
});

export const setCity = (payload) => ({
  type: SET_CITY,
  payload,
});

export const setFilterValue = (payload) => ({
  type: SET_FILTER_VALUE,
  payload,
});

export const filterRestaurants = (restaurants, filter) => ({
  type: SET_FILTERED_RESTAURANTS,
  payload: {
    restaurants: !filter
      ? restaurants
      : restaurants.filter(
          (restaurant) =>
            restaurant.name.toLowerCase().includes(filter.toLowerCase()) ||
            restaurant.address.toLowerCase().includes(filter.toLowerCase()) ||
            restaurant.area.toLowerCase().includes(filter.toLowerCase())
        ),
  },
});
