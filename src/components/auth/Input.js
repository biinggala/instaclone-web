import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 8px;
  background-color: #fafafa;
  border: 0.5px solid ${(props) => props.theme.borderColor};
  border-radius: 3px;
  margin-top: 7px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    border-color: #a8a8a8;
  }
`;

export default Input;
