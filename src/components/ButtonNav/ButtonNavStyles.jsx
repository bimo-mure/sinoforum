import styled from "styled-components";
import { motion } from "framer-motion";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  left: 3rem;
  top: 2.5rem;
  z-index: 1000;
`;

export const NavButton = styled(motion.button)`
  border: none;
  border-radius: 100px;
  background: transparent;
  cursor: pointer;
  width: 4rem;
  height: 4rem;

  & svg {
    width: 3rem;
    height: 3rem;
    fill: var(--color-red-400);
  }

  &:hover {
    background: var(--color-grey-100);
  }
`;

export const Logo = styled.img`
  height: 4rem;
  margin-left: 2rem;
`;
