import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

export const Gap = styled.div`
  width: 50rem;

  @media screen and (max-width: 1200px) {
    width: 0;
  }
`;

export const ContainerWrapper = styled.div`
  max-width: 120rem;
  padding: 5rem;
`;

export const Grid2Cols = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1200px) {
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  font-size: 7rem;
  font-weight: 900;
  color: var(--color-red-500);
`;

export const Desc = styled.p`
  font-size: 1.8rem;
  color: var(--color-grey-300);
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  top: 5%;
  left: 0%;
`;

export const ContainerList = styled.div`
  padding-top: 2rem;
  border-top: 2px solid var(--color-grey-100);
  width: 100%;
  display: flex;
  gap: 5rem;
  flex-direction: column;
`;

export const ImagePost = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImagePostWrapper = styled.div`
  overflow: hidden;
  max-width: 45rem;
  max-height: 30rem;
`;

export const HeadingPost = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const CategoryPost = styled.h3`
  font-size: 1.8rem;
  color: var(--color-red-500);
`;

export const Author = styled.div`
  font-size: 1.4rem;
  color: var(--color-red-400);
  font-weight: 400;
`;

export const Date = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--color-grey-500);
`;

export const PostInfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PostHeadingWrapper = styled.div`
  display: flex;
  padding: 0 3rem;
  width: 100%;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    max-width: none;
  }

  @media screen and (max-width: 650px) {
    padding: 0;
  }
`;

export const TextBoxPost = styled.div`
  display: flex;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
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

export const PostWrapper = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  gap: 5rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  &:hover,
  &:hover ${Excerpt}, &:hover ${Date} {
    color: var(--color-red-400);
  }
`;
