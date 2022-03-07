import styled from "styled-components";

export const Nav = styled.nav`
  --background: ${({ scrollNav }) =>
    scrollNav ? "rgba(238, 238, 238, 1)" : "rgba(0, 0, 0, 0.2)"};

  --mobilebackground: ${({ scrollNav }) =>
    scrollNav ? "#eeeeee" : "#111111"};

  --purewhite: ${({ scrollNav }) => (scrollNav ? "#000000" : "#ffffff")};

  --darkgray: ${({ scrollNav }) => (scrollNav ? "#eeeeee" : "#dbdbdb")};

  --vivid: ${({ scrollNav }) => (scrollNav ? "#2373db" : "#fcc83f")};

  --rotate: ${({ scrollNav }) => (scrollNav ? "0deg" : "360deg")};

  transition: 800ms background-color ease, 800ms color ease;
`;

export const Name = styled.h4`
  transform: ${({ scrollNav }) =>
    scrollNav ? "translate3d(-2px, -2px, 0px)" : "translate3d(0px, 0px, 0px)"};

  z-index: 2;

  transition: 500ms transform ease-in-out, 500ms color ease-in-out;
`;

export const NameMiddle = styled.h4`
  opacity: ${({ scrollNav }) => (scrollNav ? "0" : "1")};

  transform: ${({ scrollNav }) =>
    scrollNav ? "translate3d(12px, 12px, 0px)" : "translate3d(0px, 0px, 0px)"};

  z-index: 1;

  transition: 1000ms transform ease-in-out, 1000ms opacity ease-in-out,
    1000ms color ease-in-out;
`;

export const NameBackdrop = styled.h4`
  transform: ${({ scrollNav }) =>
    scrollNav ? "translate3d(2px, 2px, 0px)" : "translate3d(0px, 0px, 0px)"};
  opacity: ${({ scrollNav }) => (scrollNav ? "1" : "0")};

  z-index: 0;

  transition: 1100ms all ease-in;
`;
