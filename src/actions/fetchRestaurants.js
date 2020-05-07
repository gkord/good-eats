import axios from 'axios';
import {
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAILURE,
} from '../constants';
import { setRestaurants, setCity } from './setRestaurants';

export const fetchRestaurantsRequest = () => ({
  type: FETCH_RESTAURANTS_REQUEST,
});

export const fetchRestaurantsSuccess = (data) => ({
  type: FETCH_RESTAURANTS_SUCCESS,
  payload: data,
});

export const fetchRestaurantsFailure = (error) => ({
  type: FETCH_RESTAURANTS_FAILURE,
  data: [],
  payload: error,
});

export const fetchRestaurants = (city) => {
  return (dispatch) => {
    dispatch(fetchRestaurantsRequest);
    axios
      .get('https://opentable.herokuapp.com/api/restaurants', {
        params: {
          city,
        },
      })
      .then((res) => {
        const { restaurants } = res.data;
        console.log(restaurants);
        dispatch(fetchRestaurantsSuccess(restaurants));
        dispatch(setRestaurants(restaurants));
        dispatch(setCity(city));
        return restaurants;
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(errorMsg);
        dispatch(fetchRestaurantsFailure(error));
      });
  };
};
