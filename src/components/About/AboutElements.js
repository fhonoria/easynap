import styled from "styled-components";

export const AboutContainer = styled.div`
  color: var(--blue-color);
  background: var(--grey-color);
  padding-top: 80px;
`;

export const AboutWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-content: space-evenly;
  z-index: 1;
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;

  @media screen and (max-width: 768px) {
    margin: 10px 0;
  }
`;

export const AboutHeading = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--blue-color);
  text-align: center;
  padding: 50px 0;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col2" "col1";
  }
`;
export const AboutColumn1 = styled.div`
  grid-area: col1;
  margin: 0 25px;
  padding: 0 10px;
`;
export const AboutColumn2 = styled.div`
  grid-area: col2;
  margin: 0 25px;
  padding: 0 10px;
`;

export const AboutImgWrap = styled.div`
  max-width: 555px;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 70%;
    display: block;
    margin: 30px 0;
  }
`;
export const AboutImg = styled.img`
  width: 100%;
  margin: 0 0 50px 0;
  padding-right: 0;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 70%;
    display: block;
    margin: 0 auto;
  }
`;

export const AboutDesc = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 2;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
