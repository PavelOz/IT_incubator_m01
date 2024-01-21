import React from "react";
import { Logo } from "../../components/logo/logo";
import { S } from "./Header_Styles";

import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { DeskTopMenu } from "./headerMenu/deskTopMenu/DeskTopMenu";
import { MobileMenu } from "./headerMenu/mobileMenu/Mobilemenu";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div>
      <S.Header>
        <Container>
          <FlexWrapper justify={"space-between"} align={"center"}>
            <Logo />
            {width < breakpoint ? (
              <MobileMenu menuItems={items} />
            ) : (
              <DeskTopMenu menuItems={items} />
            )}
          </FlexWrapper>
        </Container>
      </S.Header>
    </div>
  );
};
