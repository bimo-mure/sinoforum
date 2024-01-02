import { HiMenu } from "react-icons/hi";
import styled from "styled-components";

export const NavContainer = styled.div`
  align-items: center;
  position: fixed;
  left: 3rem;
  top: 2.5rem;
  z-index: 1000;
`;

export const Burger = styled(HiMenu)`
  width: 4rem;
  height: 4rem;
  fill: var(--color-red-400);
`;

export const NavButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 4rem;
  margin-left: 2rem;
`;
