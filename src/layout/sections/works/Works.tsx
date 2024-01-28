import React, { useState } from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assests/images/project_2.webp";
import timerImg from "../../../assests/images/project_3.webp";
import { Container } from "../../../components/Container";
import { TabMenu, TabStatusType } from "./work/tabMenu/TabMenu";
import { S } from "./Works_Styles";

// const tabsItems = ["All", "Landing Page", "React", "SPA"];

const tabsItems: Array<{
  title: string;
  status: TabStatusType;
}> = [
  {
    title: "All",
    status: "all",
  },
  {
    title: "Landing Page",
    status: "landing",
  },
  {
    title: "React",
    status: "react",
  },
  {
    title: "SPA",
    status: "spa",
  },
];

const worksData = [
  {
    title: "Social network",
    src: socialImg,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    type: "spa",
  },
  {
    title: "Timer",
    src: timerImg,
    text: "Lorem ipsum dolor sit amet consectetur adipasdfasdfasdfa dfa sdfasdfa sdf asdf asdfa sdf asdfa sdf asdf asdf asdf asdf adsf asdf af dfasdfasdfasdfisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    type: "react",
  },
];

export const Works: React.FC = () => {
  const [currentFilterStatus, setcurrentFilterStatus] = useState("all");
  let filteredWorks = worksData

  if (currentFilterStatus === "landing") {
    filteredWorks = worksData.filter((work) => work.type === "landing")
  }

  if (currentFilterStatus === "react") {
    filteredWorks = worksData.filter((work) => work.type === "react")
  }

  if (currentFilterStatus === "spa") {
    filteredWorks = worksData.filter((work) => work.type === "spa")
  }

  function changeFilterStatus(value: TabStatusType) {
   setcurrentFilterStatus(value)
  }


  return (
    <S.Works>
      <Container>
        <SectionTitle>My Works</SectionTitle>

        <TabMenu tabsItems={tabsItems} 
                 changeFilterStatus={changeFilterStatus}
                 currentFilterStatus={currentFilterStatus} />
        <FlexWrapper
          justify={"space-between"}
          align={"flex-start"}
          wrap={"wrap"}
        >
          {filteredWorks.map((w) => {
            return <Work title={w.title} src={w.src} text={w.text} />;
          })}
        </FlexWrapper>
      </Container>
    </S.Works>
  );
};
