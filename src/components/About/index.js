import React from "react";
import ImgMe from "../../images/me.jpg";
import { Text } from "../../containers/LanguageProvider";
import {
  AboutContainer,
  AboutHeading,
  AboutWrapper,
  AboutRow,
  AboutColumn1,
  AboutColumn2,
  AboutImg,
  AboutImgWrap,
  AboutDesc,
} from "./AboutElements";

const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutHeading>
          <Text tid="info-about" />
        </AboutHeading>
        <AboutWrapper>
          <AboutRow>
            <AboutColumn1>
              <AboutImgWrap>
                <AboutImg src={ImgMe} alt="Honoria" />
              </AboutImgWrap>
            </AboutColumn1>
            <AboutColumn2>
              <AboutDesc>
                <Text tid="info-text" />
              </AboutDesc>
              <AboutDesc>2 kids blablabla</AboutDesc>
            </AboutColumn2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
