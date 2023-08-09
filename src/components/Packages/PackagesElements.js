import styled from "styled-components";

export const Container = styled.div`
  color: var(--blue-color);
  background: var(--grey-color);
  padding-top: 80px;
`;

export const PackagesWrapper = styled.div`
  display: grid;
  justify-content: center;
  z-index: 1;
  height: auto;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;
`;

export const Heading = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--blue-color);
  text-align: center;
  padding: 50px 0;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const PackRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  grid-template-areas: "col1 col2 col3";
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2" "col3";
  }
`;
export const PackColumn1 = styled.div`
  grid-area: col1;
  margin: 0 25px;
  background: var(--butter-color);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;
export const PackColumn2 = styled.div`
  grid-area: col2;
  margin: 0 25px;
  background: var(--butter-color);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;
export const PackColumn3 = styled.div`
  grid-area: col3;
  margin: 0 25px;
  background: var(--butter-color);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const PackTitle = styled.h2`
  padding-bottom: 20px;
`;

export const Img = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 20px;
`;

export const PackDesc = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 1.5;
`;

export const PackListWrapper = styled.ul`
  margin-bottom: 20px;
  list-style: none;

  :before {
    content: "✓";
  }
`;

export const PackList = styled.li`
  font-size: 14px;
  line-height: 2;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
