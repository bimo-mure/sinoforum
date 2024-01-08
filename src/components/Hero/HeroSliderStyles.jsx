import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  height: 65rem;
  width: 100vw;
  position: relative;
  overflow: hidden;
  z-index: 0;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  line-height: 1;
  font-size: 4rem;
  font-weight: 900;
  color: var(--color-grey-50);
`;

export const Author = styled.div`
  font-size: 2rem;
  font-weight: 400;
  color: var(--color-red-400);
`;

export const InfoBox = styled.div`
  position: relative;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -90%);
  max-width: 120rem;
  z-index: 99;
`;

export const LeftArrow = styled(motion.button)`
  background: transparent;
  border: none;
  border-radius: 100px;
  position: absolute;
  width: 5rem;
  height: 5rem;
  margin-left: 2rem;
  top: 50%;
  left: 0;
  color: var(--color-grey-0);
  z-index: 99;
  cursor: pointer;

  & svg {
    width: 4rem;
    height: 4rem;
  }

  &:hover {
    color: var(--color-red-500);
  }
`;

export const RigthArrow = styled(motion.button)`
  background: transparent;
  border: none;
  border-radius: 100px;
  color: var(--color-grey-0);
  top: 50%;
  right: 0;
  width: 5rem;
  height: 5rem;
  margin-right: 2rem;
  position: absolute;
  z-index: 99;
  cursor: pointer;

  & svg {
    width: 4rem;
    height: 4rem;
  }

  &:hover {
    color: var(--color-red-500);
  }
`;

export const Image = styled(motion.img)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Shadow = styled.div`
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 1)
  );
  z-index: 1;
`;
