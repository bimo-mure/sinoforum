import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.div`
  max-width: 25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    max-width: 100rem;
    margin-top: 5rem;
  }

  @media screen and (max-width: 550px) {
    padding: 0 3rem;
  }
`;

export const Image = styled.img`
  width: 12rem;
  height: 12rem;
  object-fit: cover;

  @media screen and (max-width: 1200px) {
    max-width: 30rem;
    max-height: 20rem;
    height: auto;
    width: 100%;
  }

  @media screen and (max-width: 660px) {
    max-width: 25rem;
  }

  @media screen and (max-width: 550px) {
    width: 12rem;
    height: 12rem;
  }
`;

export const PostTitle = styled.h1`
  line-height: 1.1;
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-grey-700);
  text-transform: capitalize;

  @media screen and (max-width: 1200px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 1.5rem;
  }
`;

export const Category = styled.h3`
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--color-red-400);
  text-transform: capitalize;
`;

export const Author = styled.div`
  color: var(--color-red-400);
  font-weight: 400;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover,
  &:hover ${PostTitle}, &:hover ${Author} {
    color: var(--color-red-400);
  }

  @media screen and (max-width: 1200px) {
    flex-direction: row;
    gap: 5rem;
    border-top: solid var(--color-grey-50);
    padding-top: 2rem;
  }

  @media screen and (max-width: 550px) {
    gap: 3rem;
  }
`;
