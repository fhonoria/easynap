import styled from "styled-components";

export const ResultContainer = styled.div`
  color: var(--blue-color);
  background: var(--rosa-color);
  height: 700px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    height: 100%;
  }
`;
export const ResultHeading = styled.h1`
  text-align: center;
  font-size: 48px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--blue-color);
  padding-bottom: 100px;

  @media screen and (max-width: 1000px) {
    padding: 80px 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;

    padding: 80px 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;

    padding: 80px 0;
  }
`;

export const ResultWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 50px;
  text-align: center;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 0 150px;
    margin-bottom: 50px;
  }
`;

export const ResultCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
`;

export const ResultP = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 32px;
  color: var(--darkblue-color);
`;
export const ResultIcon = styled.div`
  max-width: 555px;
  font-size: 100px;
`;
