import styled from "styled-components";

export const Card = styled.div`
  opacity: ${({ show }) =>
    show ? "1" : "0"};

  transform: ${({ show }) =>
  show ? "translate3d(0px, 0px, 0px)" : "translate3d(0px, 36px, 0px)"};

  position: relative;
  width:100%;
  height:100%;

  transition: 500ms all ease-in-out;
`;
