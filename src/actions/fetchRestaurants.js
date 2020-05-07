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
