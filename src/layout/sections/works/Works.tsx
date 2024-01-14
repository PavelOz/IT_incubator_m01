import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assests/images/project_2.webp";
import timerImg from "../../../assests/images/project_3.webp";
import { Container } from "../../../components/Container";
import { TabMenu } from "./work/tabMenu/TabMenu";

const worksItems = ["All", "Landing Page", "React", "SPA"];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
      <SectionTitle>My Works</SectionTitle>

      <TabMenu menuItems={worksItems} />
      <FlexWrapper justify={"space-between"} align={"flex-start"}>
        <Work
          title={"Social network"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          }
          src={socialImg}
        />

        <Work
          title={"Timer"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipasdfasdfasdfa dfa sdfasdfa sdf asdf asdfa sdf asdfa sdf asdf asdf asdf asdf adsf asdf af dfasdfasdfasdfisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          }
          src={timerImg}
        />
      </FlexWrapper>
      </Container>
    </StyledWorks>
  );
};

const StyledWorks = styled.section`

`;
