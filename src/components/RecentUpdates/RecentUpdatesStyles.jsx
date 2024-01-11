import styled from "styled-components";

export const SectionWraper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

export const Heading = styled.h1`
  margin-top: 2rem;
  padding: 4rem 0;
  font-weight: 900;
  font-size: 5rem;

  @media screen and (max-width: 550px) {
    padding: 1rem 3rem;
    font-size: 4rem;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 120rem;
  width: 100%;

  @media screen and (max-width: 1200px) {
    max-width: 100rem;
    padding: 0 5rem;
  }

  @media screen and (max-width: 550px) {
    padding: 0 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
