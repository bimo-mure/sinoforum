import { useState } from "react";
import { NavButton, Logo, NavContainer } from "./ButtonNavStyles";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import { AnimatePresence } from "framer-motion";
import { HiMenu } from "react-icons/hi";

function SidebarNavigation() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <NavContainer>
        <NavButton
          onClick={() => {
            setIsActive(!isActive);
          }}
          whileTap={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <HiMenu />
        </NavButton>
        <Logo src="/logo.png"></Logo>
      </NavContainer>
      <AnimatePresence>{isActive && <SidebarMenu />}</AnimatePresence>
    </>
  );
}

export default SidebarNavigation;
