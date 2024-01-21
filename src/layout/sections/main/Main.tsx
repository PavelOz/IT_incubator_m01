import React from "react";
import photo from "../../../assests/images/main.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";


export const Main = () => {
  return (
    <S.Main>
      <Container>
      <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
        <div>
          <S.SmallText>Hi there</S.SmallText>
          <S.Name>I am <span>Svetlana Dyablo</span></S.Name>
          <S.MainTitle>Web Developer</S.MainTitle>
        </div>
        <S.PhotWrapper>
        <S.Photo src={photo} alt="" />
        </S.PhotWrapper>
      </FlexWrapper>
      </Container>
    </S.Main>
  );
};

