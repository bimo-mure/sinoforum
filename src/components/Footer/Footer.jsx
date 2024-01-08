import {
  Container,
  Menu,
  Logo,
  Wrapper,
  Rights,
  FooterContainer,
} from "./FooterStyles";
import { Link } from "react-router-dom";

import { HomeMenu, FooterNav } from "../../data/NavigationData";

function Footer() {
  return (
    <Container>
      <Menu>
        <Wrapper>
          <Logo src="./logo.png"></Logo>
          <Rights>Forum Sinologi Indonesia. All Rights Reserved</Rights>
        </Wrapper>

        <FooterContainer>
          {HomeMenu.map((item, index) => (
            <Link key={index} to={item.to}>
              {item.name}
            </Link>
          ))}
        </FooterContainer>
        <FooterContainer>
          {FooterNav.map((item, index) => (
            <Link key={index} to={item.to}>
              {item.name}
            </Link>
          ))}
        </FooterContainer>
      </Menu>
    </Container>
  );
}

export default Footer;
