import React from "react";
import { Button } from "../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Heading,
  InfoP,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  whiteBg,
  id,
  imgStart,
  lightText,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
}) => {
  return (
    <>
      <InfoContainer whiteBg={whiteBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <Heading lightText={lightText}>{headLine}</Heading>
                <InfoP lightText={lightText}>{description}</InfoP>
                <BtnWrap>
                  <Button
                    to="home"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
