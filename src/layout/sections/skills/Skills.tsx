import React from "react";

import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import { S } from "./Skills_Styles"


const skillData =[
  {
    iconId: "codeSvg",
    title: "html5",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque possimus tenetur reiciendis ipsa maiores, dolores quibusdam accusantium voluptatibus dignissimos, nihil perferendis vitae eos temporibus ea facilis inventore, molestiae illo. Est."

},
{
  iconId: "cssSvg",
  title: "CSS",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque possimus tenetur reiciendis ipsa maiores, dolores quibusdam accusantium voluptatibus dignissimos, nihil perferendis vitae eos temporibus ea facilis inventore, molestiae illo. Est."

},
{
  iconId: "reactSvg",
  title: "React",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque possimus tenetur reiciendis ipsa maiores, dolores quibusdam accusantium voluptatibus dignissimos, nihil perferendis vitae eos temporibus ea facilis inventore, molestiae illo. Est."

},
{
  iconId: "typescriptSvg",
  title: "TypeScript",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque possimus tenetur reiciendis ipsa maiores, dolores quibusdam accusantium voluptatibus dignissimos, nihil perferendis vitae eos temporibus ea facilis inventore, molestiae illo. Est."

},
{
  iconId: "styledcomponentsSvg",
  title: "Styled Components",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque possimus tenetur reiciendis ipsa maiores, dolores quibusdam accusantium voluptatibus dignissimos, nihil perferendis vitae eos temporibus ea facilis inventore, molestiae illo. Est."

},
{
  iconId: "webdesingSvg",
  title: "Web Design",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque possimus tenetur reiciendis ipsa maiores, dolores quibusdam accusantium voluptatibus dignissimos, nihil perferendis vitae eos temporibus ea facilis inventore, molestiae illo. Est."

},
]
export const Skills = () => {
  return (
    <S.Skills>
      <Container>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper wrap={"wrap"} justify={"space-between"}>
        
        {skillData.map((s, index) => {return <Skill iconId ={s.iconId} key={index} title={s.title}   description={s.description}/>})}

      </FlexWrapper>
      </Container>
    </S.Skills>
  );
};

