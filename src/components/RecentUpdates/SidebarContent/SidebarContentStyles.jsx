import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 12rem;
  height: 12rem;
  object-fit: cover;
`;

export const PostTitle = styled.h1`
  line-height: 1.1;
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-grey-700);
  text-transform: capitalize;
`;

export const Category = styled.h3`
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--color-red-400);
  text-transform: capitalize;
`;

export const Author = styled.div`
  color: var(--color-red-400);
  font-weight: 600;
`;

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
