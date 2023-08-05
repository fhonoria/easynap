import React from "react";
import Icon1 from "../../images/undraw_pregnant.svg";
import Icon2 from "../../images/undraw_time.svg";
import Icon3 from "../../images/undraw_baby.svg";
import Icon4 from "../../images/undraw_support.svg";
import { Text } from "../../containers/LanguageProvider";
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
        <ServicesH1>
          <Text tid="services-header" />
        </ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesImg src={Icon1} />
            <ServicesH2>
              <Text tid="services-pregnancy" />
            </ServicesH2>
            <ServicesP>Text</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesImg src={Icon2} />
            <ServicesH2>
              <Text tid="services-routine" />
            </ServicesH2>
            <ServicesP>Text</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesImg src={Icon3} />
            <ServicesH2>
              <Text tid="services-onetime" />
            </ServicesH2>
            <ServicesP>Text</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesImg src={Icon4} />
            <ServicesH2>
              <Text tid="services-fullsupport" />
            </ServicesH2>
            <ServicesP>Text</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
