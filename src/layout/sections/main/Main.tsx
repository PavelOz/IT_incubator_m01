import React from "react";
import photo from "../../../assests/images/main.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { S } from "./Main_Styles";
import Typewriter from "typewriter-effect";
import Tilt from 'react-parallax-tilt';


export const Main = () => {
  return (
    <S.Main>
      <Container>
        <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
          <div>
         
            <S.SmallText>Hi there</S.SmallText>
            <S.Name>
              I am <span>Svetlana Dyablo</span>
            </S.Name>
            <S.MainTitle>
            <p>Web Developer, Frontend Developer, Web Designer</p>
            <Typewriter
              options={{
                strings: ["Web Developer", "A Frontend Developer", "A Web Designer"],
                autoStart: true,
                loop: true,
              }}
            />
            </S.MainTitle>
          </div>
          <Tilt>
          <S.PhotWrapper>
            <S.Photo src={photo} alt="" />
          </S.PhotWrapper>
          </Tilt>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
