import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader } from './Header.styles';

const Header = () => {
  return (
    <div className='wrapper'>
      <StyledHeader>
        <h1>Good Eats</h1>
        <nav>
          <Link to='/'> &#8592; Homepage</Link>
        </nav>
      </StyledHeader>
    </div>
  );
};

export default Header;
