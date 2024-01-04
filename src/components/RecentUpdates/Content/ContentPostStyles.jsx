import { Link } from "react-router-dom";
import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 6rem;
  column-gap: 5rem;
`;

export const ContainerWraper = styled.div`
  width: 82rem;
`;

export const Image = styled.img`
  width: 40rem;
  height: 40rem;
  object-fit: cover;
`;

export const PostTitle = styled.h1`
  line-height: 1.1;
  font-size: 3rem;
  font-weight: 900;
  color: var(--color-grey-700);
  text-transform: uppercase;
`;

export const Category = styled.h3`
  font-size: 2rem;
  font-weight: 900;
  color: var(--color-red-400);
  text-transform: capitalize;
`;

export const Author = styled.div`
  color: var(--color-red-400);
  font-weight: 600;
`;

export const ContentContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover,
  &:hover ${Category}, &:hover ${PostTitle}, &:hover ${Author}, &:hover p {
    color: var(--color-red-400);
  }
`;
