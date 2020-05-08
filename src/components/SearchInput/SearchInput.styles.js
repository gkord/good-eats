import styled from 'styled-components';

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: 1px solid lightgray;
  display: inline-block;
  padding: 10px 15px;
  font-size: 20px;
  border-radius: 4px;
  -webkit-appearance: none;
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
`;
