import {
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_RESTAURANTS_FAILURE,
} from '../constants';

const fetchInitialState = {
  loading: false,
  data: [],
  error: '',
};

const fetchRestaurantsReducer = (state = fetchInitialState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_RESTAURANTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: '',
      };
    case FETCH_RESTAURANTS_FAILURE:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default fetchRestaurantsReducer;
