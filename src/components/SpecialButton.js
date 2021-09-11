import styled from "styled-components";

export const SpecialButton = styled.button`
  --background: ${({ switcher }) =>
  switcher ? "rgb(238, 238, 238)" : "rgb(20, 20, 20)"};

  --purewhite: ${({ switcher }) =>
  switcher ? "#000000" : "#ffffff"};

  --darkgray: ${({ switcher }) =>
  switcher ? "#eeeeee" : "#dbdbdb"};

  transition: 0.8s all ease;
`;
