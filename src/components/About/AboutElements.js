import styled from "styled-components";

export const Container = styled.div`
  color: var(--blue-color);
  background: var(--grey-color);
`;

export const AboutWrapper = styled.div`
  display: grid;
  justify-content: center;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
`;

export const Heading = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--blue-color);
  text-align: center;
  padding: 50px 0;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2";
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

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 20px;
`;

export const AboutDesc = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 2;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
