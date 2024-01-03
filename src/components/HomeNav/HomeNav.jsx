import { HomeMenu, HomeMenuExtra } from "../../data/NavigationData";
import {
  Container,
  Menu,
  MenuItem,
  MenuWrapper,
  MenuWrapperExtra,
  About,
  Contact,
} from "./HomeNavStyles";
import { Link } from "react-router-dom";

function HomeNav() {
  return (
    <Container>
      <Menu>
        <MenuWrapper>
          {HomeMenu.map((item, index) => (
            <Link to={item.to} key={index}>
              <MenuItem>{item.name}</MenuItem>
            </Link>
          ))}
        </MenuWrapper>
        <MenuWrapperExtra>
          <Link to={HomeMenuExtra[0].to}>
            <About>{HomeMenuExtra[0].name}</About>
          </Link>
          <Link to={HomeMenuExtra[1].to}>
            <Contact>{HomeMenuExtra[1].name}</Contact>
          </Link>
        </MenuWrapperExtra>
      </Menu>
    </Container>
  );
}

export default HomeNav;
