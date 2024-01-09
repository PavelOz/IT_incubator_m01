import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper wrap={"wrap"} justify={"space-between"}>
        <Skill iconId ={"codeSvg"} title={"html5"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque possimus tenetur reiciendis ipsa maiores, dolores quibusdam accusantium voluptatibus dignissimos, nihil perferendis vitae eos temporibus ea facilis inventore, molestiae illo. Est."}/>
        <Skill iconId ={"cssSvg"} title={"CSS"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque possimus tenetur reiciendis ipsa maiores, dolores quibusdam accusantium voluptatibus dignissimos, nihil perferendis vitae eos temporibus ea facilis inventore, molestiae illo. Est."}/>
        <Skill iconId ={"reactSvg"} title={"React"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque possimus tenetur reiciendis ipsa maiores, dolores quibusdam accusantium voluptatibus dignissimos, nihil perferendis vitae eos temporibus ea facilis inventore, molestiae illo. Est."}/>
        <Skill iconId ={"typescriptSvg"} title={"TypeScript"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque possimus tenetur reiciendis ipsa maiores, dolores quibusdam accusantium voluptatibus dignissimos, nihil perferendis vitae eos temporibus ea facilis inventore, molestiae illo. Est."}/>
        <Skill iconId ={"styledcomponentsSvg"} title={"Styled Components"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque possimus tenetur reiciendis ipsa maiores, dolores quibusdam accusantium voluptatibus dignissimos, nihil perferendis vitae eos temporibus ea facilis inventore, molestiae illo. Est."}/>
        <Skill iconId ={"webdesingSvg"} title={"Web Design"} description={"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque possimus tenetur reiciendis ipsa maiores, dolores quibusdam accusantium voluptatibus dignissimos, nihil perferendis vitae eos temporibus ea facilis inventore, molestiae illo. Est."}/>

      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
background-color: #ceceff;
min-height: 100vh
`

