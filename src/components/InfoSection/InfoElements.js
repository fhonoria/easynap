import styled from "styled-components";

export const InfoContainer = styled.div`
  color: var(--blue-color);
  background: ${({ whiteBg }) =>
    whiteBg ? "var(--butter-color)" : "var(--rosa-color)"};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  } ;
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  align-content: space-evenly;
`;

export const Heading = styled.h1`
  text-align: center;
  font-size: 48px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--blue-color);

  @media screen and (max-width: 768px) {
    font-size: 40px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
    margin-bottom: 50px;
  }
`;
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2"`};

  @media screen and (max-width: 768px) {
    grid-template-areas: "col2" "col1";
  }
`;
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const InfoP = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 32px;
  color: var(--darkblue-color);
`;

export const InfoList = styled.ul`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 32px;
  color: var(--darkblue-color);
  display: ${({ withList }) => (withList ? "block" : "none")};
`;

export const InfoListItems = styled.li`
  margin-left: 20px;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
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

  @media screen and (max-width: 768px) {
    width: 80%;
    display: block;
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;
