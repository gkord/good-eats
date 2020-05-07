import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import RestaurantDetailsCard from '../RestaurantDetailsCard/RestaurantDetailsCard';

const RestaurantList = () => {
  const restaurants = useSelector((state) => state.setRestaurants.restaurants);
  const city = useSelector((state) => state.setRestaurants.city);

  return (
    <ul>
      {restaurants.map((restaurant) => {
        return (
          <RestaurantDetailsCard
            key={restaurant.id}
            reserveLink={restaurant.reserve_url}
            restaurantName={restaurant.name}
            restaurantImg={restaurant.image_url}
            city={city.charAt(0).toUpperCase() + city.slice(1)}
          />
        );
      })}
    </ul>
  );
};

// RestaurantList.propTypes = {};

export default RestaurantList;
