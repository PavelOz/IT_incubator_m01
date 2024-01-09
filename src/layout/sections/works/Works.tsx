import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import socialImg from "../../../assests/images/project_2.webp"
import timerImg from "../../../assests/images/project_3.webp"

const worksItems = ["All", "Landing Page", "React", "SPA"]


export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
        
        <Menu menuItems={worksItems}/>
        <FlexWrapper  justify={"space-around"}>
            <Work title = {"Social network"} text = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "}
            src={socialImg}/>

            <Work title = {"Timer"} text = {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. "}
            src={timerImg}/>
        </FlexWrapper>
        </StyledWorks>

    )
}

const StyledWorks = styled.section `
    min-height: 100vh;
    background-color: #86e286;
`
