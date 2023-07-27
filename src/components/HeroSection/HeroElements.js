import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
  background: var(--butter-color);
  display: flex;
  justify-content: center;
  align-elements: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  /*:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);

    z-index: 2;
  }*/
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: var(--butter-color);
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeroH1 = styled.h1`
  margin-top: 150px;
  color: var(--darkblue-color);
  font-size: 28px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const HeroP = styled.p`
  margin-top: 8px;
  color: var(--blue-color);
  font-size: 48px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroBtnWrapper = styled.div``;
export const ArrowForward = styled(MdArrowForward)``;
export const ArrowRight = styled(MdKeyboardArrowRight)``;
