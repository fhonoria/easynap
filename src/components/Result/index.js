import React from "react";
import { Text } from "../../containers/LanguageProvider";
import { AiFillMessage } from "react-icons/ai";
import { MdCrib } from "react-icons/md";
import { GiNightSleep } from "react-icons/gi";
import {
  ResultContainer,
  ResultWrapper,
  ResultHeading,
  ResultCard,
  ResultP,
  ResultIcon,
} from "./ResultElements";

const Result = () => {
  return (
    <>
      <ResultContainer>
        <ResultHeading>
          <Text tid="result-header" />
        </ResultHeading>
        <ResultWrapper>
          <ResultCard>
            <ResultIcon>
              <AiFillMessage />
            </ResultIcon>
            <ResultP>
              <Text tid="result-list1" />
            </ResultP>
          </ResultCard>
          <ResultCard>
            <ResultIcon>
              <MdCrib />
            </ResultIcon>
            <ResultP>
              <Text tid="result-list2" />
            </ResultP>
          </ResultCard>
          <ResultCard>
            <ResultIcon>
              <GiNightSleep />
            </ResultIcon>
            <ResultP>
              <Text tid="result-list3" />
            </ResultP>
          </ResultCard>
        </ResultWrapper>
      </ResultContainer>
    </>
  );
};

export default Result;
