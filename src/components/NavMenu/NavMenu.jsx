import { useState } from "react";
import { Burger, NavButton, Logo, NavContainer } from "./NavMenuStyles";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import { AnimatePresence } from "framer-motion";

function SidebarNavigation() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <NavContainer>
        <NavButton
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <Burger />
        </NavButton>
        <Logo src="/logo.png"></Logo>
      </NavContainer>
      <AnimatePresence>{isActive && <SidebarMenu />}</AnimatePresence>
    </>
  );
}

export default SidebarNavigation;
