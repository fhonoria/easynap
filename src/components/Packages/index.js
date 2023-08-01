import React from "react";
import Icon1 from "../../images/undraw_pregnant.svg";
import Icon2 from "../../images/undraw_time.svg";
import Icon3 from "../../images/undraw_baby.svg";
import Icon4 from "../../images/undraw_support.svg";
import Icon5 from "../../images/undraw_appreciation.svg";
import Icon6 from "../../images/undraw_support2.svg";
import { Button } from "../ButtonElements";
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
        <Heading>Guides</Heading>
        <PackagesWrapper>
          <PackRow>
            <PackColumn1>
              <PackTitle>Pregnancy Guide</PackTitle>
              <Img src={Icon1} alt="pregnant"></Img>
              <PackDesc>
                A full package that gives you a nice method in your hand that
                you can apply from day 1 until 3 years old. It shows you how to
                teach your baby sleep from day 1 in the most loving way.
                <br />
                <br />
                <strong>It includes:</strong>
              </PackDesc>
              <PackListWrapper>
                <PackList>Settling methods</PackList>
                <PackList>New Born Routine</PackList>
                <PackList>Routine from 16weeks till 3 years</PackList>
              </PackListWrapper>
              <BtnWrap>
                <Button
                  to="home"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                >
                  Book it
                </Button>
              </BtnWrap>
            </PackColumn1>
            <PackColumn2>
              <PackTitle>New Born Guide</PackTitle>
              <Img src={Icon3} alt="baby"></Img>
              <PackDesc>
                A full package that gives you a nice method in your hand that
                you can apply from day 1 until 3 years old. It shows you how to
                teach your baby sleep from day 1 in the most loving way.
                <br />
                <br />
                <strong>It includes:</strong>
              </PackDesc>
              <PackListWrapper>
                <PackList>Settling methods</PackList>
                <PackList>New Born Routine</PackList>
                <PackList>Routine from 16weeks till 3 years</PackList>
              </PackListWrapper>
              <BtnWrap>
                <Button
                  to="home"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                >
                  Book it
                </Button>
              </BtnWrap>
            </PackColumn2>
            <PackColumn3>
              <PackTitle>All Ages Routine</PackTitle>
              <Img src={Icon2} alt="baby"></Img>
              <PackDesc>
                A full package that gives you a nice method in your hand that
                you can apply from day 1 until 3 years old. It shows you how to
                teach your baby sleep from day 1 in the most loving way.
                <br />
                <br />
                <strong>It includes:</strong>
              </PackDesc>
              <PackListWrapper>
                <PackList>Settling methods</PackList>
                <PackList>New Born Routine</PackList>
                <PackList>Routine from 16weeks till 3 years</PackList>
              </PackListWrapper>
              <BtnWrap>
                <Button
                  to="home"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                >
                  Book it
                </Button>
              </BtnWrap>
            </PackColumn3>
          </PackRow>
        </PackagesWrapper>
        <Heading>Consultations</Heading>
        <PackagesWrapper>
          <PackRow>
            <PackColumn1>
              <PackTitle>1 time consultation</PackTitle>
              <Img src={Icon4} alt="pregnant"></Img>
              <PackDesc>
                A full package that gives you a nice method in your hand that
                you can apply from day 1 until 3 years old. It shows you how to
                teach your baby sleep from day 1 in the most loving way.
                <br />
                <br />
                <strong>It includes:</strong>
              </PackDesc>
              <PackListWrapper>
                <PackList>Settling methods</PackList>
                <PackList>New Born Routine</PackList>
                <PackList>Routine from 16weeks till 3 years</PackList>
              </PackListWrapper>
              <BtnWrap>
                <Button
                  to="home"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                >
                  Book it
                </Button>
              </BtnWrap>
            </PackColumn1>
            <PackColumn2>
              <PackTitle>Full support package</PackTitle>
              <Img src={Icon5} alt="pregnant"></Img>
              <PackDesc>
                A full package that gives you a nice method in your hand that
                you can apply from day 1 until 3 years old. It shows you how to
                teach your baby sleep from day 1 in the most loving way.
                <br />
                <br />
                <strong>It includes:</strong>
              </PackDesc>
              <PackListWrapper>
                <PackList>Settling methods</PackList>
                <PackList>New Born Routine</PackList>
                <PackList>Routine from 16weeks till 3 years</PackList>
              </PackListWrapper>
              <BtnWrap>
                <Button
                  to="home"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                >
                  Book it
                </Button>
              </BtnWrap>
            </PackColumn2>
            <PackColumn3>
              <PackTitle>Ultimate support package</PackTitle>
              <Img src={Icon6} alt="pregnant"></Img>
              <PackDesc>
                A full package that gives you a nice method in your hand that
                you can apply from day 1 until 3 years old. It shows you how to
                teach your baby sleep from day 1 in the most loving way.
                <br />
                <br />
                <strong>It includes:</strong>
              </PackDesc>
              <PackListWrapper>
                <PackList>Settling methods</PackList>
                <PackList>New Born Routine</PackList>
                <PackList>Routine from 16weeks till 3 years</PackList>
              </PackListWrapper>
              <BtnWrap>
                <Button
                  to="home"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                >
                  Book it
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
