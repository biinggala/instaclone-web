import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseBox } from "../shared";

const SBottomBox = styled(BaseBox)`
  text-align: center;
  padding: 25px 0;
  a {
    font-weight: 600;
    color: ${(props) => props.theme.accent};
  }
`;

function BottomBox({ cta, link, linkText }) {
  return (
    <SBottomBox>
      <span>{cta}</span> <Link to={link}>{linkText}</Link>
    </SBottomBox>
  );
}

BottomBox.protoType = {
  cta: PropTypes.toString.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default BottomBox;
