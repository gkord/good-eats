import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px outset #eee;
  padding: 10px 0px;
  nav a {
    text-decoration: none;
    color: #007bff;

    &:visited {
      color: #007bff;
    }
  }
`;
