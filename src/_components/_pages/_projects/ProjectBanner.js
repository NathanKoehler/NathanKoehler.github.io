import React from "react";
import { Container } from "@mui/system";
import { Parallax } from "react-scroll-parallax";
import { ScrollButton } from "../../Scroll";

export default function ProjectBanner({ image, title, background, titleColor, roles }) {
  return <div className="banner" style={{ backgroundColor: `${background}` }}>
    <Parallax
      className="banner-img"
      translateX={[0, 35, 'easeInCubic']}
      translateY={[0, 100]}
      rotateX={[0, 70, 'easeIn']}
      rotateZ={[0, 25, 'easeInQuad']}
      opacity={[2, -0.5, 'easeIn']}
      shouldAlwaysCompleteAnimation={true}
      shouldDisableScalingTranslations={true}
      onChange={(element) => element.progress}
    >
      <Container sx={{ display: 'flex', justifyContent: 'center' }} disableGutters maxWidth="md">
        <img src={image} alt="NCR Interactive Demo Frontpage" />
      </Container>
    </Parallax>
    <Parallax
      className="banner-title-container top"
      shouldDisableScalingTranslations={true}
      translateY={2}
    >
      <Container sx={{ display: 'flex', justifyContent: 'center' }} maxWidth="lg">
        <h1 className="banner-title MuiContainer-maxWidthLg" style={{ color: titleColor }}>{title}</h1>
      </Container>
    </Parallax>
    <Parallax
      className="banner-title-container bottom"
      shouldDisableScalingTranslations={true}
      translateY={2}
    >
      <Container sx={{ display: 'flex', justifyContent: 'center' }} maxWidth="lg">
        <h1 className="banner-title-bg MuiContainer-maxWidthLg" style={{ color: titleColor }}>{title}</h1>
      </Container>
    </Parallax>
    <Parallax className="banner-dots" opacity={[4, -1]} translateY={-25}>
        <ul className="dots-inside width-spanned-list">
          {
            roles && roles.map((item, index) => {
              return (
                <li key={index} style={{ backgroundColor: item.color }}>{item.role}</li>
              )
            })
          }
        </ul>
      </Parallax>
      <Parallax
          className="banner-title-btn"
          translateY={-25}
        >
        <ScrollButton
          goTo="content"
          vDuration={800}
          vOffset={-240}
          className="btns btn-inside"
          buttonStyle="btn--invisible"
          buttonSize="btn--large--invisible"
        >
          <div
            className="banner-icon about-footer-arrow"
            aria-label="Scroll To Bottom"
          >
            <i className="fas fa-chevron-down"></i>
          </div>
        </ScrollButton>
        </Parallax>
  </div>;
}
