import React from "react";
import ImgMe from "../../images/me.jpg";
import { ImgWrap } from "../InfoSection/InfoElements";
import { Button } from "../ButtonElements";
import { Text } from "../../containers/LanguageProvider";
import {
  Container,
  Heading,
  AboutWrapper,
  AboutRow,
  AboutColumn1,
  AboutColumn2,
  Img,
  AboutDesc,
  BtnWrap,
} from "./AboutElements";

const About = () => {
  return (
    <>
      <Container>
        <Heading>
          <Text tid="info-about" />
        </Heading>
        <AboutWrapper>
          <AboutRow>
            <AboutColumn1>
              <ImgWrap>
                <Img src={ImgMe} alt="Honoria" />
              </ImgWrap>
            </AboutColumn1>
            <AboutColumn2>
              <AboutDesc>
                <Text tid="info-text" />
              </AboutDesc>
              <AboutDesc>2 kids blablabla</AboutDesc>
              <BtnWrap>
                <Button>
                  <Text tid="info-button" />
                </Button>
              </BtnWrap>
            </AboutColumn2>
          </AboutRow>
        </AboutWrapper>
      </Container>
    </>
  );
};

export default About;
