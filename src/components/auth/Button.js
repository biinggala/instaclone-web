import styled from "styled-components";

const Button = styled.input`
  border: none;
  border-radius: 3px;
  margin-top: 15px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  text-align: center;
  padding: 10px 0;
  font-weight: 600;
  width: 100%;
  opacity: ${(props) => (props.disabled ? "0.3" : "1")};
`;

export default Button;
