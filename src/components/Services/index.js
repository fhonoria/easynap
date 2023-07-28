import React from "react";
import Icon1 from "../../images/undraw_pregnant.svg";
import Icon2 from "../../images/undraw_time.svg";
import Icon3 from "../../images/undraw_baby.svg";
import Icon4 from "../../images/undraw_support.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesImg,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesImg src={Icon1} />
            <ServicesH2>Pregnany package</ServicesH2>
            <ServicesP>Text</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesImg src={Icon2} />
            <ServicesH2>Routines</ServicesH2>
            <ServicesP>Text</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesImg src={Icon3} />
            <ServicesH2>1 week consultation</ServicesH2>
            <ServicesP>Text</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesImg src={Icon4} />
            <ServicesH2>Full support</ServicesH2>
            <ServicesP>Text</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
