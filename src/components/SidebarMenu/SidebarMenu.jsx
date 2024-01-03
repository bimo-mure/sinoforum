import { Link } from "react-router-dom";
import { SideBarMenu } from "../../data/NavigationData";
import { BoxContainer, Menu, Nav, NavChild } from "./SidebarMenuStyles";
import { Slide, NavItem } from "../../Anim/Animation";

function SidebarMenu() {
  return (
    <BoxContainer
      variants={Slide}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Menu variants={NavItem}>
        {SideBarMenu.map((item, index) =>
          item.children.length > 0 ? (
            <>
              <Nav variants={Slide} exit={{ x: 0, opacity: 1 }}>
                {item.name}
              </Nav>
              <NavChild variants={Slide} exit={{ x: 0, opacity: 1 }}>
                {item.children.map((nav) => (
                  <Link to={nav.to} key={nav.name}>
                    {nav.name}
                  </Link>
                ))}
              </NavChild>
            </>
          ) : (
            <>
              <Nav variants={Slide} exit={{ x: 0, opacity: 1 }}>
                <Link to={item.to} key={index}>
                  {item.name}
                </Link>
              </Nav>
            </>
          )
        )}
      </Menu>
    </BoxContainer>
  );
}

export default SidebarMenu;
