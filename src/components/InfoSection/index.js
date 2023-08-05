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
  InfoList,
  InfoListItems,
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
  list1,
  list2,
  list3,
  list4,
  list5,
  withList,
}) => {
  return (
    <>
      <InfoContainer whiteBg={whiteBg} id={id}>
        <InfoWrapper>
          <Heading lightText={lightText}>{headLine}</Heading>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <InfoP lightText={lightText}>{description}</InfoP>
                <InfoList withList={withList}>
                  <InfoListItems>{list1}</InfoListItems>
                  <InfoListItems>{list2}</InfoListItems>
                  <InfoListItems>{list3}</InfoListItems>
                  <InfoListItems>{list4}</InfoListItems>
                  <InfoListItems>{list5}</InfoListItems>
                </InfoList>
                <InfoList>
                  <InfoListItems>Copy copy</InfoListItems>
                </InfoList>
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
