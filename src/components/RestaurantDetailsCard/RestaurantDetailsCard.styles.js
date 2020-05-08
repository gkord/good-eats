import styled from 'styled-components';

export const StyledCard = styled.li`
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 10px;
  background: white;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding-bottom: 10px;
  img {
    width: 100%;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: #fff;
`;
