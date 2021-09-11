import styled from "styled-components";

export const Nav = styled.nav`
  --background: ${({ scrollNav }) =>
    scrollNav ? "rgb(238, 238, 238)" : "rgb(20, 20, 20)"};

  --purewhite: ${({ scrollNav }) => (scrollNav ? "#000000" : "#ffffff")};

  --darkgray: ${({ scrollNav }) => (scrollNav ? "#eeeeee" : "#dbdbdb")};

  --vivid: ${({ scrollNav }) => (scrollNav ? "#2373db" : "#fcc83f")};

  transition: 800ms all ease;
`;

export const Name = styled.h4`
  transform: ${({ scrollNav }) =>
    scrollNav ? "translate3d(-2px, -2px, 0px)" : "translate3d(0px, 0px, 0px)"};

  z-index: 2;

  transition: 500ms all ease-in-out;
`;

export const NameMiddle = styled.h4`
  opacity: ${({ scrollNav }) => (scrollNav ? "0" : "1")};

  transform: ${({ scrollNav }) =>
    scrollNav ? "translate3d(12px, 12px, 0px)" : "translate3d(0px, 0px, 0px)"};

  z-index: 1;

  transition: 1000ms all ease-in-out;
`;

export const NameBackdrop = styled.h4`
  transform: ${({ scrollNav }) =>
    scrollNav ? "translate3d(2px, 2px, 0px)" : "translate3d(0px, 0px, 0px)"};
  opacity: ${({ scrollNav }) => (scrollNav ? "1" : "0")};

  z-index: 0;

  transition: 1100ms all ease-in;
`;
