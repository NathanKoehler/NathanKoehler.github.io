import styled from "styled-components";

export const GalleryCard = styled.div`
  opacity: ${({ show }) =>
    show ? "1" : "0"};

  transform: ${({ show }) =>
  show ? "translate3d(0px, 0px, 0px)" : "translate3d(0px, 36px, 0px)"};

  position: relative;

  transition: 500ms all ease-in-out;
`;
