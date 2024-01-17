import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { theme } from "../../../../styles/Theme";

type SkillPropsType = {
  iconId: string;
  title: string;
  description: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <FlexWrapper direction={"column"} align={"center"}>
        <IconWrapper>
          <Icon iconId={props.iconId} />
        </IconWrapper>
        <StyledTitle>{props.title}</StyledTitle>
        <StyledText>{props.description}</StyledText>
      </FlexWrapper>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
  width: 380px;
  flex-grow: 1;
  padding: 62px 20px 40px;
 @media ${theme.media.mobile} {
  padding: 62px 0 40px;
 }

`;

export const IconWrapper = styled.div`
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

const StyledTitle = styled.h3`
  margin: 70px 0 15px;

  text-transform: uppercase;
`;

const StyledText = styled.p`
  text-align: center;


`;
