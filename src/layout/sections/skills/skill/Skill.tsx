import React from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/Icon";

type SkillPropsType = {
  iconId: string
  title: string
  description: string
};

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} />
      <StyledTitle>{props.title}</StyledTitle>
      <StyledText>{props.description}</StyledText>
    </StyledSkill>
  );
};

const StyledSkill = styled.div`
width: 30%;
background-color: #797777;
margin: 5px
`;

const StyledTitle = styled.h3``;

const StyledText = styled.p``;
