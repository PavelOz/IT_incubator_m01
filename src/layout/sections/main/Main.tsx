import React from "react";
import styled from "styled-components";
import photo from "../../../assests/images/main.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { font } from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
      <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
        <div>
          <SmallText>Hi there</SmallText>
          <Name>I am <span>Svetlana Dyablo</span></Name>
          <MainTitle>Web Developer</MainTitle>
        </div>
        <PhotWrapper>
        <Photo src={photo} alt="" />
        </PhotWrapper>
      </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
min-height: 100vh;
background-color: aliceblue;
display: flex;
`

const PhotWrapper = styled.div `
  position: relative;
  z-index: 0;
  margin-top: 65px;

  &::before{
    content: "";
    width: 360px;
    height: 470px;

    

    border: 5px solid ${theme.colors.accent};
    position: absolute;
    top: -24px;
    left: 22px;

    z-index: -1;

    @media ${theme.media.mobile} {
    width: 314px;
    height: 414px;
    top:-17px;
    left: 20px;

  }
  }



`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;

  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
  }
`;

const MainTitle = styled.h1 `
${font({weight: 400, Fmax: 27, Fmin: 20,})}

/* font-size: 27px;
font-weight: 400; */

`
const Name = styled.h2 `
${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36,})}

/* font-family: Josefin Sans, sans-serif;
font-size: 50px;
font-weight: 700; */
letter-spacing: 2.5px;

margin: 10px 0;

span{
position: relative;
z-index: 0;
white-space: nowrap;

  &::before{
    content: "";
    display: inline-block;
    width: 100%;
    height: 20px;
    background-color: ${theme.colors.accent};
    position: absolute;
    bottom: 0;
    z-index: -1;
  }
}

@media ${theme.media.mobile} {
  margin: 15px 0 22px
  
}
`
const SmallText = styled.h2 `
${font({weight: 400, Fmax: 14, Fmin: 14,})}

/* font-size: 14px;
font-weight: 400; */
`