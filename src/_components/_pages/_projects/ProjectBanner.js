import React from "react";
import { Container } from "@mui/system";
import { Parallax } from "react-scroll-parallax";
import { ScrollButton } from "../../Scroll";

export default function ProjectBanner({
  image,
  title,
  background,
  titleColor,
  roles,
  maxWidth,
}) {
  const [scroll, setScroll] = React.useState(0);
  return (
    <div
      className="banner"
      shouldAlwaysCompleteAnimation={true}
      shouldDisableScalingTranslations={true}
      style={{
        backgroundColor: `${background}`,
        height: `${100 - scroll * 100}vh`,
        transition: "opacity 1s ease-in-out",
      }}
    >
      <Parallax
        className="banner-img"
        translateY={[0, 20]}
        opacity={[2, -3, "easeInQuad"]}
        shouldAlwaysCompleteAnimation={true}
        shouldDisableScalingTranslations={true}
        onChange={(element) => setScroll(element.progress)}
        style={{
          visibility: `${scroll > 0.7 ? "hidden" : "visible"}`,
          clipPath: `polygon(${0 + scroll * 30}% ${10 - scroll * 15}%, ${
            0 + scroll * 15
          }% 95%, ${100 - scroll * 30}% ${95 + scroll * 15}%, ${
            100 - scroll * 15
          }% 10%)`,
        }}
      >
        <Container
          sx={{ display: "flex", justifyContent: "center", paddingY: `${maxWidth === "xs" ? 100 : 0}px` }}
          disableGutters
          maxWidth={maxWidth ? maxWidth : "md"}
        >
          <img src={image} alt="NCR Interactive Demo Frontpage" />
        </Container>
      </Parallax>
      <div
        style={{ top: `${11 - scroll * 2}vh` }}
        className="banner-title-container top"
        shouldAlwaysCompleteAnimation={true}
        shouldDisableScalingTranslations={true}
      >
        <Container
          sx={{ display: "flex", justifyContent: "center" }}
          maxWidth="lg"
        >
          <h1
            className="banner-title MuiContainer-maxWidthLg"
            style={{ color: titleColor }}
          >
            {title}
          </h1>
        </Container>
      </div>
      <div
        style={{ top: `${11 - scroll * 2}vh` }}
        className="banner-title-container bottom"
        shouldAlwaysCompleteAnimation={true}
        shouldDisableScalingTranslations={true}
      >
        <Container
          sx={{ display: "flex", justifyContent: "center" }}
          maxWidth="lg"
        >
          <h1
            className="banner-title-bg MuiContainer-maxWidthLg"
            style={{ color: titleColor }}
          >
            {title}
          </h1>
        </Container>
      </div>
      <div
        className="banner-dots"
        style={{ opacity: `${100 - scroll * 180}%` }}
      >
        <ul className="dots-inside width-spanned-list">
          {roles &&
            roles.map((item, index) => {
              return (
                <li key={index} style={{ backgroundColor: item.color }}>
                  {item.role}
                </li>
              );
            })}
        </ul>
      </div>
      <div
        className="banner-title-btn"
        style={{ opacity: `${100 - scroll * 180}%` }}
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
      </div>
    </div>
  );
}
