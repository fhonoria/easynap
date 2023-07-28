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
          <MissionP>
            I am a certified baby sleep consultants who provide personalized
            sleep routines and consultations to help families get the sleep they
            need. Being a mom of two I understand how important a good night's
            sleep is for both parents and babies, and I am here to help.
          </MissionP>
        </MissionWrapper>
      </MissionContainer>
    </>
  );
};

export default Mission;
