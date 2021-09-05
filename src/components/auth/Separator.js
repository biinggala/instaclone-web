import styled from "styled-components";

const SSeparator = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0 30px 0;
  span {
    font-size: 12px;
    color: #b2b2b2;
    margin: 0 20px;
    font-weight: 600;
  }
  div {
    width: 100%;
    height: 0.5px;
    background-color: ${(props) => props.theme.borderColor};
  }
`;

function Separator() {
  return (
    <SSeparator>
      <div></div>
      <span>OR</span>
      <div></div>
    </SSeparator>
  );
}

export default Separator;
