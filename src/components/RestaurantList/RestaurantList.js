import React from 'react';
import { useSelector } from 'react-redux';
import RestaurantDetailsCard from '../RestaurantDetailsCard/RestaurantDetailsCard';
import StyledList from './RestaurantList.styles';
import Header from '../Header/Header';

const RestaurantList = () => {
  const restaurants = useSelector((state) => state.setRestaurants.restaurants);
  const city = useSelector((state) => state.setRestaurants.city);

  return (
    <>
      <Header />
      <h2>Results for {city}</h2>
      <StyledList>
        {restaurants.map((restaurant) => {
          return (
            <RestaurantDetailsCard
              key={restaurant.id}
              reserveLink={restaurant.reserve_url}
              restaurantName={restaurant.name}
              restaurantImg={restaurant.image_url}
              address={restaurant.address}
            />
          );
        })}
      </StyledList>
    </>
  );
};

export default RestaurantList;
