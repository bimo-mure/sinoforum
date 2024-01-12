import { Link } from "react-router-dom";
import styled from "styled-components";

export const Heading = styled.h1`
  margin-top: 2rem;
  border-top: 1px solid black;
  font-weight: 900;
  font-size: 5rem;
  text-transform: capitalize;
  margin: 4rem 0;

  @media screen and (max-width: 550px) {
    font-size: 4rem;
  }
`;

export const Section = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 120rem;

  @media screen and (max-width: 1200px) {
    max-width: 100rem;
    width: 100%;
    padding: 0 3rem;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
  gap: 5rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
`;

export const Main = styled.div`
  grid-row: span 3;
  width: 78rem;

  @media screen and (max-width: 1200px) {
    max-width: 100rem;
    width: 100%;
  }
`;

export const TextBoxSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SidebarImg = styled.img`
  object-fit: cover;
  width: 12rem;
  height: 12rem;

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

export const SidebarPostTitle = styled.h1`
  line-height: 1.1;
  font-size: 2rem;
  font-weight: 900;
  color: var(--color-grey-700);
  text-transform: capitalize;
`;

export const Sidebar = styled(Link)`
  padding: 2rem 0;
  border-top: 1px solid var(--color-grey-100);
  display: flex;
  flex-direction: row;
  gap: 2rem;

  &:hover,
  &:hover ${SidebarPostTitle} {
    color: var(--color-red-400);
  }
`;

export const Image = styled.img`
  object-fit: cover;

  @media screen and (max-width: 1200px) {
    max-width: 100rem;
    width: 100%;
    max-height: 50rem;
    height: auto;
  }
`;

export const PostTitle = styled.h1`
  line-height: 1.1;
  font-size: 3rem;
  font-weight: 900;
  color: var(--color-grey-700);
  text-transform: uppercase;
`;

export const Author = styled.div`
  color: var(--color-red-400);
  font-weight: 400;
`;

export const MainContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 2rem 0;
  border-top: 1px solid var(--color-grey-100);

  &:hover,
  &:hover ${PostTitle}, &:hover ${Author} {
    color: var(--color-red-400);
  }
`;
