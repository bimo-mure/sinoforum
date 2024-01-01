import { HiMenu } from "react-icons/hi";
import styled from "styled-components";

export const Burger = styled(HiMenu)`
  width: 5rem;
  height: 5rem;
  fill: var(--color-red-400);
`;

export const NavButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: fixed;
  left: 3rem;
  top: 1rem;
  z-index: 1000;
`;
