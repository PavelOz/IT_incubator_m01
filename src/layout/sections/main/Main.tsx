import React from "react";
import styled from "styled-components";
import photo from "../../../assests/images/main.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper align-items="center" justify="space-around">
        <div>
          <span>Hi there</span>
          <Name>I am Svetlana Dyablo</Name>
          <MainTitle>Web Developer</MainTitle>
        </div>
        <Photo src={photo} alt="" />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
min-height: 100vh;
background-color: aliceblue;
`


const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const MainTitle = styled.h1 `
    
`
const Name = styled.h2 `
    
`