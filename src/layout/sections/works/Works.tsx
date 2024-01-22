import React from "react";

import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assests/images/project_2.webp";
import timerImg from "../../../assests/images/project_3.webp";
import { Container } from "../../../components/Container";
import { TabMenu } from "./work/tabMenu/TabMenu";
import { S } from "./Works_Styles";


const worksItems = ["All", "Landing Page", "React", "SPA"];

const workData = [
  {
    title: "Social network",
    src: socialImg,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
  },
  {
    title: "Timer",
    src: timerImg,
    text: "Lorem ipsum dolor sit amet consectetur adipasdfasdfasdfa dfa sdfasdfa sdf asdf asdfa sdf asdfa sdf asdf asdf asdf asdf adsf asdf af dfasdfasdfasdfisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
];


export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
      <SectionTitle>My Works</SectionTitle>

      <TabMenu menuItems={worksItems} />
      <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
       
                 {workData.map((w)=>{
                  return( <Work title={w.title}  
                  src={w.src}  
                  text={w.text}/>)})}
      
      </FlexWrapper>
      </Container>
    </S.Works>
  );
};


