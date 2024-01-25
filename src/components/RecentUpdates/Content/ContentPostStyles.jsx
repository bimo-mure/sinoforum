import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerWraper = styled.div`
  max-width: 82rem;
  width: 100%;
  flex-direction: column;
  display: flex;
  gap: 8rem;

  @media screen and (max-width: 1200px) {
    max-width: 100rem;
  }
`;

export const ImageWraper = styled.div`
  position: relative;
  width: 50%;
  height: auto;
  max-width: 50rem;
  max-height: 50rem;
  overflow: hidden;

  @media screen and (max-width: 1200px) {
    max-width: 30rem;
    max-height: 30rem;
  }

  @media screen and (max-width: 660px) {
    max-width: 25rem;
    max-height: 25rem;
  }

  @media screen and (max-width: 550px) {
    max-width: none;
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const Shadow = styled.div`
  @media screen and (max-width: 550px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 1)
    );
    z-index: 1;
  }
`;

export const PostTitle = styled.h1`
  line-height: 1.1;
  font-size: 3rem;
  font-weight: 900;
  color: var(--color-grey-700);
  text-transform: uppercase;

  @media screen and (max-width: 1200px) {
    font-size: 2.5rem;
  }
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
  width: 50%;

  @media screen and (max-width: 550px) {
    padding: 0 3rem;
    position: absolute;
    top: 45%;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
  }
`;

export const Excerpt = styled.p`
  overflow: hidden;
  color: var(--color-grey-400);
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin: 0;
`;

export const Container = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 5rem;
  height: 100%;

  &:hover,
  &:hover ${PostTitle}, &:hover ${Author}, &:hover ${Excerpt} {
    color: var(--color-red-400);
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
    height: 45rem;
    position: relative;
  }
`;
