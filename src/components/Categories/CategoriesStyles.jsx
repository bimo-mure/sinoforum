import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: end;
`;

export const Container = styled.div`
  max-width: 120rem;
  width: 100%;
  position: relative;
  height: 30rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

export const Heading = styled.h1`
  font-size: 7rem;
  font-weight: 900;
  color: var(--color-red-500);
`;

export const Desc = styled.p`
  font-size: 1.8rem;
  color: var(--color-grey-500);
`;

export const TextBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  max-width: 50%;
  top: 5%;
  left: 0%;
`;

export const ContainerList = styled.div`
  padding-top: 2rem;
  border-top: 2px solid var(--color-grey-100);
  max-width: 120rem;
  width: 100%;
  display: flex;
  gap: 5rem;
  flex-direction: column;
`;

export const PostWrapper = styled.div`
  display: flex;
  gap: 4rem;
`;

export const ImagePost = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImagePostWrapper = styled.div`
  max-width: 45rem;
  width: 100%;
  height: 25rem;
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
  color: var(--color-grey-400);
`;

export const TextBoxPost = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
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
