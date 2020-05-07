import axios from 'axios';
import {
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAILURE,
} from '../constants';

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
        console.log(res.data);
        dispatch(fetchRestaurantsSuccess(res.data));
      })
      .catch((error) => {
        console.log(error.message);
        dispatch(fetchRestaurantsFailure(error.message));
      });
  };
};
