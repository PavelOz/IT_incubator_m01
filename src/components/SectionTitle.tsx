import styled from "styled-components";
import { theme } from "../styles/Theme";
import { font } from "../styles/Common";

export const SectionTitle = styled.h2`
  ${font({
    family: "Josefin-Sans, sans-serif",
    weight: 400,
    Fmax: 36,
    Fmin: 30,
  })}
  text-align: center;
  letter-spacing: 4px;

  position: relative;

  margin-bottom: 90px;

  &::before {
    content: "";
    display: inline-block;
    height: 1px;
    width: 50px;
    background-color: ${theme.colors.accent};

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -30px;
    @media ${theme.media.mobile} {
      bottom: -24px;
    }
  }
`;
