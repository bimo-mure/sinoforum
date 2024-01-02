import styled from "styled-components";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
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

export const Author = styled.p`
  font-size: 2rem;
  font-weight: 500;
  color: var(--color-red-400);
`;

export const InfoBox = styled.div`
  position: absolute;
  top: 65%;
  left: 15%;
  max-width: 50%;
  z-index: 99;
`;

export const LeftArrow = styled(FiChevronLeft)`
  position: absolute;
  width: 5rem;
  height: 5rem;
  margin-left: 2rem;
  top: 50%;
  left: 0;
  color: var(--color-grey-0);
  z-index: 99;
  cursor: pointer;
`;

export const RigthArrow = styled(FiChevronRight)`
  color: var(--color-grey-0);
  top: 50%;
  right: 0;
  width: 5rem;
  height: 5rem;
  margin-right: 2rem;
  position: absolute;
  z-index: 99;
  cursor: pointer;
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
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 1)
  );
  z-index: 1;
`;
