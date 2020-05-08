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

export const fetchRestaurants = (city, history) => {
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
        if (restaurants.length > 0) {
          dispatch(fetchRestaurantsSuccess(restaurants));
          dispatch(setRestaurants(restaurants));
          dispatch(setCity(city));
          return history.push('/results');
        }
        return alert('No results');
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(errorMsg);
        dispatch(fetchRestaurantsFailure(error));
      });
  };
};
