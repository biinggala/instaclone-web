import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  accent: "#0096f6",
  borderColor: "#dbdbdb",
};

export const darkTheme = {
  fontColor: "#fafafa",
  bgColor: "#2c2c2c",
};

export const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        text-decoration: none;
    }
    input {
        all: unset;
    }
    body{
        background-color: ${(props) => props.theme.bgColor};
        font-size: 14px;
        font-family:'Open Sans', sans-serif;
        color: rgb(38, 38, 38);
    }
`;
