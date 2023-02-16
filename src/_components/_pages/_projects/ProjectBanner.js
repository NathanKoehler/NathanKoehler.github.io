import React from "react";
import { Container } from "@mui/system";
import { Parallax } from "react-scroll-parallax";
import { ScrollButton } from "../../Scroll";

export default function ProjectBanner({ image, title, background, titleColor, roles, maxWidth }) {
  const [scroll, setScroll] = React.useState(0);
  return <div className="banner" style={{ backgroundColor: `${background}` }}>
    <Parallax
      className="banner-img"
      translateY={[0, 100]}
      opacity={[2, -0.1, 'easeInQuad']}
      shouldAlwaysCompleteAnimation={true}
      shouldDisableScalingTranslations={true}
      onChange={(element) => setScroll(element.progress)}
      style={{ clipPath: `polygon(${0 + scroll * 30}% ${10 - scroll * 15}%, ${0 + scroll * 15}% 95%, ${100 - scroll * 30}% ${95 + scroll * 15}%, ${100 - scroll * 15}% 10%)` }}
    >
      <Container sx={{ display: 'flex', justifyContent: 'center' }} disableGutters maxWidth={maxWidth ? maxWidth : "md"}>
        <img src={image} alt="NCR Interactive Demo Frontpage" />
      </Container>
    </Parallax>
    <Parallax
      className="banner-title-container top"
      shouldAlwaysCompleteAnimation={true}
      shouldDisableScalingTranslations={true}
      translateY={4}
    >
      <Container sx={{ display: 'flex', justifyContent: 'center' }} maxWidth="lg">
        <h1 className="banner-title MuiContainer-maxWidthLg" style={{ color: titleColor }}>{title}</h1>
      </Container>
    </Parallax>
    <Parallax
      className="banner-title-container bottom"
      shouldAlwaysCompleteAnimation={true}
      shouldDisableScalingTranslations={true}
      translateY={4}
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
