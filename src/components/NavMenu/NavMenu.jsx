import { useState } from "react";
import { Burger, NavButton } from "./NavMenuStyles";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import { AnimatePresence } from "framer-motion";

function SidebarNavigation() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <NavButton
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <Burger />
      </NavButton>
      <AnimatePresence>{isActive && <SidebarMenu />}</AnimatePresence>
    </>
  );
}

export default SidebarNavigation;
