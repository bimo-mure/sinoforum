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
  padding-left: 2rem;
  border-left: 1px solid var(--color-grey-100);
  max-width: 100rem;
  padding: 5rem;
`;

export const Grid2Cols = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1200px) {
    margin: 0 auto;
  }
`;

export const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Hero = styled.div`
  height: 50rem;
  max-width: 100vw;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Heading = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  line-height: 5rem;
  text-transform: uppercase;
`;

export const Author = styled.p`
  font-size: 1.8rem;
  color: var(--color-red-400);
`;

export const Date = styled.p`
  font-size: 1.8rem;
  color: var(--color-grey-300);
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const BoxAuthor = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const PostText = styled.p`
  white-space: pre-line;
  line-height: 1.6;
  font-size: 2.2rem;
  color: var(--color-grey-600);
`;
