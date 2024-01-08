import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerWraper = styled.div`
  width: 82rem;
  flex-direction: column;
  display: flex;
  gap: 5rem;
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
  font-weight: 400;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Container = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 5rem;

  &:hover,
  &:hover ${PostTitle}, &:hover ${Author} {
    color: var(--color-red-400);
  }
`;
