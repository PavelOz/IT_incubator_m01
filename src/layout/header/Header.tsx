import React from "react";
import styled from "styled-components";
import { Logo } from "../../components/logo/logo";
import { Menu } from "../../components/menu/menu";
import { Skills } from "../sections/skills/Skills";


const items = ["Home", "Skills", "Works", "Testimony", "Contact"]

export const Header = () => {
  return (
    <div>
      <StyledHeader>
        <Logo />
        <Menu menuItems={items}/>
      </StyledHeader>
    </div>
  );
};

const StyledHeader = styled.header `
    background-color: green;
    display: flex;
    justify-content: space-between;
`