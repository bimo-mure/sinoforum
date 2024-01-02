import styled from "styled-components";
import { motion } from "framer-motion";

export const BoxContainer = styled(motion.div)`
  height: 100vh;
  width: 25%;
  background-color: var(--color-grey-50);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
`;

export const Menu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  padding: 0rem 9rem;
  gap: 2rem;
`;

export const Nav = styled(motion.ul)`
  color: var(--color-grey-700);
  font-family: "Poppins", sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const NavChild = styled(motion.li)`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-left: 1rem;
  color: var(--color-grey-600);
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
`;
