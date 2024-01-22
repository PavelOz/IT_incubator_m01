import React from "react";
import { FlexWrapper } from "../FlexWrapper";
import { S } from "./Slider_Styles";


export const Slider: React.FC = () => {
  return (
    <S.Slider>
      <FlexWrapper>
        <S.Slide>
          <S.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            excepturi consequatur consectetur quas veniam alias nobis beatae
          </S.Text>
          <S.Name>@Ivan Ivanov</S.Name>
        </S.Slide>
      </FlexWrapper>
      <S.Pagination>
        <span> </span>
        <span className={"active"}> </span>
        <span> </span>
      </S.Pagination>
    </S.Slider>
  );
};
