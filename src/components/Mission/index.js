import React from "react";
import { Text } from "../../containers/LanguageProvider";
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
          <MissionH1>
            <Text tid="mission-header" />
          </MissionH1>
          <MissionP>
            <Text tid="mission-text" />
          </MissionP>
        </MissionWrapper>
      </MissionContainer>
    </>
  );
};

export default Mission;
