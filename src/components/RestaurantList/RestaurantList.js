import React from 'react';
// import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import RestaurantDetailsCard from '../RestaurantDetailsCard/RestaurantDetailsCard';
import StyledList from './RestaurantList.styles';
import Header from '../Header/Header';

const RestaurantList = () => {
  const restaurants = useSelector((state) => state.setRestaurants.restaurants);
  const city = useSelector((state) => state.setRestaurants.city);
  const address = useSelector((state) => state.setRestaurants.address);

  return (
    <>
      <Header />
      <StyledList>
        {restaurants.map((restaurant) => {
          return (
            <RestaurantDetailsCard
              key={restaurant.id}
              reserveLink={restaurant.reserve_url}
              restaurantName={restaurant.name}
              restaurantImg={restaurant.image_url}
              city={city.charAt(0).toUpperCase() + city.slice(1)}
              address={address}
            />
          );
        })}
      </StyledList>
    </>
  );
};

// RestaurantList.propTypes = {};

export default RestaurantList;
