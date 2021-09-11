import styled from "styled-components";

export const Instagram = styled.i`
  transform: ${({ scrollNav }) =>
    scrollNav ? "translate3d(0px, -12px, 0px)" : "translate3d(0px, 0px, 0px)"};
  opacity: ${({ scrollNav }) => (scrollNav ? "0" : "1")};

  z-index: 2;
    
  transition: 250ms all ease-in-out;
`;

export const InstagramBackground = styled.i`
  transform: ${({ scrollNav }) =>
    scrollNav ? "translate3d(0px, -12px, 0px)" : "translate3d(0px, 0px, 0px)"};
    

  z-index: 1;

  transition: 250ms all ease-in-out;
`;
