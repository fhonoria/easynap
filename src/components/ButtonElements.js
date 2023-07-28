import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Button = styled(LinkS)`
  border-radius: 50px;
  background: var(--blue-color);
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: var(--butter-color);
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) =>
      primary ? "var(--butter-color)" : "var(--darkblue-color)"};
    color: ${({ dark }) =>
      dark ? "var(--blue-color)" : "var(--butter-color)"};
  }
`;
