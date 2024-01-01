import styled from "styled-components";
import { motion } from "framer-motion";

export const BoxContainer = styled(motion.div)`
  height: 100vh;
  width: 20%;
  background-color: var(--color-grey-800);
  position: fixed;
  left: 0;
  top: 0;
`;

export const Menu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  padding: 0rem 3rem;
  gap: 0.5rem;
`;

export const Nav = styled(motion.ul)`
  color: var(--color-grey-0);
  font-size: 2rem;
  font-weight: 700;
`;

export const NavChild = styled(motion.li)`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  color: var(--color-grey-50);
  font-size: 1.8rem;
  font-weight: 400;
`;
