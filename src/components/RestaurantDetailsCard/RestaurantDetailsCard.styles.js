import styled from 'styled-components';

const StyledCard = styled.li`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 10px;
  background: white;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  img {
    width: 100%;
  }
`;

export default StyledCard;
