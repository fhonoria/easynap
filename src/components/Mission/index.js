import React from "react";
import {
  MissionContainer,
  MissionWrapper,
  MissionH1,
  MissionP,
} from "./MissionElements";

const Mission = () => {
  return (
    <>
      <MissionContainer>
        <MissionWrapper>
          <MissionH1>My mission</MissionH1>
          <MissionP>To reach out to as many families as possible.....</MissionP>
        </MissionWrapper>
      </MissionContainer>
    </>
  );
};

export default Mission;
