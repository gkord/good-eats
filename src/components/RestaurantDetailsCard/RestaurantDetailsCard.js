import React from 'react';
import PropTypes from 'prop-types';
import { StyledCard, StyledLink } from './RestaurantDetailsCard.styles';
import { StyledButton } from '../SearchInput/SearchInput.styles';

const RestaurantDetailsCard = ({
  reserveLink,
  restaurantImg,
  restaurantName,
  address,
}) => {
  return (
    <StyledCard>
      <img src={restaurantImg} alt={restaurantName} />
      <h3>{restaurantName}</h3>
      <p>{address}</p>
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
  address: PropTypes.string,
};

export default RestaurantDetailsCard;
