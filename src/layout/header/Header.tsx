import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { Menu } from "../../components/menu/menu";

import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header = () => {
  return (
    <div>
      <StyledHeader>
        <Container>
          <FlexWrapper justify={"space-between"} align={"center"}>
            <Logo />
            <Menu menuItems={items} />
          </FlexWrapper>
        </Container>
      </StyledHeader>
    </div>
  );
};

const StyledHeader = styled.header`
  background-color: green;
`;
