import React from "react";
import { Text } from "../../containers/LanguageProvider";
import Img from "../../images/pexels3.jpg";
import {
  ProcessContainer,
  ProcessWrapper,
  ProcessHeading,
  ProcessRow,
  ProcessColumn1,
  ProcessColumn2,
  ProcessTextWrapper,
  ProcessP,
  ProcessListWrapper,
  ProcessList,
  ProcessImgWrap,
  ProcessImg,
} from "./ProcessElements";

const Process = () => {
  return (
    <>
      <ProcessContainer>
        <ProcessWrapper>
          <ProcessHeading>
            <Text tid="process-header" />
          </ProcessHeading>
          <ProcessRow>
            <ProcessColumn1>
              <ProcessImgWrap>
                <ProcessImg src={Img} alt="sleeping kid" />
              </ProcessImgWrap>
            </ProcessColumn1>
            <ProcessColumn2>
              <ProcessTextWrapper>
                <ProcessP>
                  <Text tid="process-text" />
                </ProcessP>
                <ProcessListWrapper>
                  <ProcessList>
                    <Text tid="process-list1" />,
                  </ProcessList>
                  <ProcessList>
                    <Text tid="process-list2" />,
                  </ProcessList>
                  <ProcessList>
                    <Text tid="process-list3" />,
                  </ProcessList>
                  <ProcessList>
                    <Text tid="process-list4" />,
                  </ProcessList>
                  <ProcessList>
                    <Text tid="process-list5" />,
                  </ProcessList>
                </ProcessListWrapper>
              </ProcessTextWrapper>
            </ProcessColumn2>
          </ProcessRow>
        </ProcessWrapper>
      </ProcessContainer>
    </>
  );
};

export default Process;
