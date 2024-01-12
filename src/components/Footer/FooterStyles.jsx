import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  background-color: var(--color-grey-50);
  margin-top: 5rem;
`;

export const Logo = styled.img`
  height: 6rem;
`;

export const ImageWrapper = styled.div`
  height: auto;
  width: 100%;

  @media screen and (max-width: 660px) {
    margin-bottom: 2rem;
  }
`;

export const Rights = styled.div`
  color: var(--color-grey-300);
  font-size: 1.2rem;
  text-transform: uppercase;
  order: 2;

  @media screen and (max-width: 660px) {
    margin-top: 2rem;
  }
`;

export const Menu = styled.div`
  padding: 6rem 0;
  max-width: 120rem;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    max-width: 100rem;
    width: 100%;
    padding: 3rem 3rem;
  }

  @media screen and (max-width: 660px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
`;

export const FooterContainer = styled.div`
  color: var(--color-grey-600);
  font-size: 1.4rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
