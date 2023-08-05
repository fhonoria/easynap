import React from "react";
import Icon1 from "../../images/undraw_pregnant.svg";
import Icon2 from "../../images/undraw_time.svg";
import Icon3 from "../../images/undraw_baby.svg";
import Icon4 from "../../images/undraw_support.svg";
import Icon5 from "../../images/undraw_appreciation.svg";
import Icon6 from "../../images/undraw_support2.svg";
import { Button } from "../ButtonElements";
import { Text } from "../../containers/LanguageProvider";
import {
  Container,
  PackagesWrapper,
  Heading,
  PackRow,
  PackColumn1,
  PackColumn2,
  PackColumn3,
  PackTitle,
  Img,
  PackDesc,
  PackListWrapper,
  PackList,
  BtnWrap,
} from "./PackagesElements";

const Packages = (primary, dark) => {
  return (
    <>
      <Container>
        <Heading>
          <Text tid="packages-routines" />
        </Heading>
        <PackagesWrapper>
          <PackRow>
            <PackColumn1>
              <PackTitle>
                <Text tid="services-pregnancy" />
              </PackTitle>
              <Img src={Icon1} alt="pregnant"></Img>
              <PackDesc>
                <Text tid="packages-pregnancy-description" />
                <br />
                <br />
                <strong>
                  <Text tid="packages-includes" />
                </strong>
              </PackDesc>
              <PackListWrapper>
                <PackList>
                  <Text tid="packages-pregnancy-list1" />
                </PackList>
                <PackList>
                  <Text tid="packages-pregnancy-list2" />
                </PackList>
                <PackList>
                  <Text tid="packages-pregnancy-list3" />
                </PackList>
              </PackListWrapper>
              <BtnWrap>
                <Button
                  to="home"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                >
                  <Text tid="packages-button" />
                </Button>
              </BtnWrap>
            </PackColumn1>
            <PackColumn2>
              <PackTitle>
                <Text tid="services-newborn" />
              </PackTitle>
              <Img src={Icon3} alt="baby"></Img>
              <PackDesc>
                <Text tid="packages-pregnancy-description" />
                <br />
                <br />
                <strong>
                  <Text tid="packages-includes" />
                </strong>
              </PackDesc>
              <PackListWrapper>
                <PackList>
                  <Text tid="packages-pregnancy-list1" />
                </PackList>
                <PackList>
                  <Text tid="packages-pregnancy-list2" />
                </PackList>
                <PackList>
                  <Text tid="packages-pregnancy-list3" />
                </PackList>
              </PackListWrapper>
              <BtnWrap>
                <Button
                  to="home"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                >
                  <Text tid="packages-button" />
                </Button>
              </BtnWrap>
            </PackColumn2>
            <PackColumn3>
              <PackTitle>
                <Text tid="services-routine" />
              </PackTitle>
              <Img src={Icon2} alt="baby"></Img>
              <PackDesc>
                <Text tid="packages-pregnancy-description" />
                <br />
                <br />
                <strong>
                  <Text tid="packages-includes" />
                </strong>
              </PackDesc>
              <PackListWrapper>
                <PackList>
                  <Text tid="packages-pregnancy-list1" />
                </PackList>
                <PackList>
                  <Text tid="packages-pregnancy-list2" />
                </PackList>
                <PackList>
                  <Text tid="packages-pregnancy-list3" />
                </PackList>
              </PackListWrapper>
              <BtnWrap>
                <Button
                  to="home"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                >
                  <Text tid="packages-button" />
                </Button>
              </BtnWrap>
            </PackColumn3>
          </PackRow>
        </PackagesWrapper>
        <Heading>
          <Text tid="packages-consulting" />
        </Heading>
        <PackagesWrapper>
          <PackRow>
            <PackColumn1>
              <PackTitle>
                <Text tid="services-onetime" />
              </PackTitle>
              <Img src={Icon4} alt="pregnant"></Img>
              <PackDesc>
                <Text tid="packages-pregnancy-description" />
                <br />
                <br />
                <strong>
                  <Text tid="packages-includes" />
                </strong>
              </PackDesc>
              <PackListWrapper>
                <PackList>
                  <Text tid="packages-pregnancy-list1" />
                </PackList>
                <PackList>
                  <Text tid="packages-pregnancy-list2" />
                </PackList>
                <PackList>
                  <Text tid="packages-pregnancy-list3" />
                </PackList>
              </PackListWrapper>
              <BtnWrap>
                <Button
                  to="home"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                >
                  <Text tid="packages-button" />
                </Button>
              </BtnWrap>
            </PackColumn1>
            <PackColumn2>
              <PackTitle>
                <Text tid="services-fullsupport" />
              </PackTitle>
              <Img src={Icon5} alt="pregnant"></Img>
              <PackDesc>
                <Text tid="packages-pregnancy-description" />
                <br />
                <br />
                <strong>
                  <Text tid="packages-includes" />
                </strong>
              </PackDesc>
              <PackListWrapper>
                <PackList>
                  <Text tid="packages-pregnancy-list1" />
                </PackList>
                <PackList>
                  <Text tid="packages-pregnancy-list2" />
                </PackList>
                <PackList>
                  <Text tid="packages-pregnancy-list3" />
                </PackList>
              </PackListWrapper>
              <BtnWrap>
                <Button
                  to="home"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                >
                  <Text tid="packages-button" />
                </Button>
              </BtnWrap>
            </PackColumn2>
            <PackColumn3>
              <PackTitle>
                <Text tid="services-ultimatesupport" />
              </PackTitle>
              <Img src={Icon6} alt="pregnant"></Img>
              <PackDesc>
                <Text tid="packages-pregnancy-description" />
                <br />
                <br />
                <strong>
                  <Text tid="packages-includes" />
                </strong>
              </PackDesc>
              <PackListWrapper>
                <PackList>
                  <Text tid="packages-pregnancy-list1" />
                </PackList>
                <PackList>
                  <Text tid="packages-pregnancy-list2" />
                </PackList>
                <PackList>
                  <Text tid="packages-pregnancy-list3" />
                </PackList>
              </PackListWrapper>
              <BtnWrap>
                <Button
                  to="home"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                >
                  <Text tid="packages-button" />
                </Button>
              </BtnWrap>
            </PackColumn3>
          </PackRow>
        </PackagesWrapper>
      </Container>
    </>
  );
};

export default Packages;
