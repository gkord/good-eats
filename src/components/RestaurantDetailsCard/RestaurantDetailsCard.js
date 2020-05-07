import React from 'react';
import PropTypes from 'prop-types';
import StyledCard from './RestaurantDetailsCard.styles';

const RestaurantDetailsCard = ({
  reserveLink,
  restaurantImg,
  restaurantName,
  city,
}) => {
  return (
    <StyledCard>
      <img src={restaurantImg} alt={restaurantName} />
      <p>{restaurantName}</p>
      <p>{city}</p>
      <a href={reserveLink}>Book on OpenTable</a>
    </StyledCard>
  );
};

RestaurantDetailsCard.propTypes = {
  restaurantImg: PropTypes.string,
  restaurantName: PropTypes.string,
  city: PropTypes.string,
};

export default RestaurantDetailsCard;
