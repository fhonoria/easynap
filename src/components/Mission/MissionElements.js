import styled from "styled-components";

export const MissionContainer = styled.div`
  color: var(--sand-color);
  background: var(--butter-color);
`;

export const MissionWrapper = styled.div`
  display: block;
  height: 200px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
`;

export const MissionH1 = styled.h1`
  text-transform: uppercase;
  font-size: 48px;
  margin: 64px 0;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const MissionP = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
`;
