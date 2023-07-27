import React from "react";
import Img1 from "../../images/img1.jpg";
import Img2 from "../../images/img1.jpg";
import Img3 from "../../images/img1.jpg";
import Img4 from "../../images/img1.jpg";
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
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesImg src={Img1} />
            <ServicesH2>Title</ServicesH2>
            <ServicesP>Text</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesImg src={Img2} />
            <ServicesH2>Title</ServicesH2>
            <ServicesP>Text</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesImg src={Img3} />
            <ServicesH2>Title</ServicesH2>
            <ServicesP>Text</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesImg src={Img4} />
            <ServicesH2>Title</ServicesH2>
            <ServicesP>Text</ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
