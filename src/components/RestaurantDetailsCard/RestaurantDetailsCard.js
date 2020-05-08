import React from 'react';
import PropTypes from 'prop-types';
import { StyledCard, StyledLink } from './RestaurantDetailsCard.styles';
import { StyledButton } from '../SearchInput/SearchInput.styles';

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
      <StyledButton as={StyledLink} href={reserveLink}>
        Book on OpenTable
      </StyledButton>
    </StyledCard>
  );
};

RestaurantDetailsCard.propTypes = {
  restaurantImg: PropTypes.string,
  restaurantName: PropTypes.string,
  city: PropTypes.string,
};

export default RestaurantDetailsCard;
