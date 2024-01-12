import {
  Container,
  Menu,
  Logo,
  Rights,
  FooterContainer,
  ImageWrapper,
} from "./FooterStyles";
import { Link } from "react-router-dom";

import { HomeMenu, FooterNav } from "../../data/NavigationData";

function Footer() {
  return (
    <Container>
      <Menu>
        <ImageWrapper>
          <Logo src="./logo.png"></Logo>
        </ImageWrapper>
        <Rights>Forum Sinologi Indonesia. All Rights Reserved</Rights>

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
