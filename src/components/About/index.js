import React from "react";
import ImgMe from "../../images/me.jpg";
import { ImgWrap } from "../InfoSection/InfoElements";
import { Button } from "../ButtonElements";
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
        <Heading>About</Heading>
        <AboutWrapper>
          <AboutRow>
            <AboutColumn1>
              <ImgWrap>
                <Img src={ImgMe} alt="Honoria" />
              </ImgWrap>
            </AboutColumn1>
            <AboutColumn2>
              <AboutDesc>
                At EasyNap, my mission is to help families get the sleep they
                deserve. I believe that every family is unique and there is no
                one-size-fits-all solution to sleep problems. That's why I
                provide personalized sleep consulting services to help families
                establish healthy sleep habits for their babies. I am a
                certified baby sleep consultant, with years of experience and
                training in sleep consulting and I am dedicated to helping
                families achieve their sleep goals.
              </AboutDesc>
              <AboutDesc>2 kids blablabla</AboutDesc>
              <BtnWrap>
                <Button>Book a consult with me</Button>
              </BtnWrap>
            </AboutColumn2>
          </AboutRow>
        </AboutWrapper>
      </Container>
    </>
  );
};

export default About;
