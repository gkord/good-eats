import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 414px;
  @media (max-width: 414px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const StyledInput = styled.input`
  flex: 1;
  border: 1px solid lightgray;
  display: inline-block;
  padding: 10px 15px;
  font-size: 20px;
  border-radius: 4px;
  min-height: 23px;
  -webkit-appearance: none;
  margin-right: 8px;
  @media (max-width: 414px) {
    width: 100%;
    margin: 10px 0px;
    padding: 10px 0px;
    text-align: center;
    font-size: 16px;
  }
`;

export const StyledButton = styled.button`
  cursor: pointer;
  display: inline-block;
  padding: 10px 15px;
  font-size: 20px;
  background: #28a745;
  color: #fff;
  border-radius: 4px;
  border: 1px solid transparent;
  -webkit-appearance: none;
  &:hover {
    background: #218838;
  }
  @media (max-width: 414px) {
    width: 100%;
    padding: 10px 5px;
    margin-bottom: 10px;
    text-align: center;
  }
`;
