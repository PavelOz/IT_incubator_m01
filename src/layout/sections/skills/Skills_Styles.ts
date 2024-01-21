import styled from "styled-components";
import { theme } from "../../../styles/Theme";


const Skills = styled.section`

`

// Skill

const Skill = styled.div`
  width: 380px;
  flex-grow: 1;
  padding: 62px 20px 40px;
 @media ${theme.media.mobile} {
  padding: 62px 0 40px;
 }

`;

const IconWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    transform: rotate(45deg) translate(-50%, -50%);
    flex-shrink: 0;
    background: rgba(255, 255, 255, 0.1);

    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`;

const SkillTitle = styled.h3`
  margin: 70px 0 15px;

  text-transform: uppercase;
`;

const SkillText = styled.p`
  text-align: center;


`;


export const S = {
    Skills,
    Skill,
    SkillTitle,
    SkillText,
    IconWrapper
}