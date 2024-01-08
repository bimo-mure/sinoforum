import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  background-color: var(--color-grey-50);
  margin-top: 5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Logo = styled.img`
  height: 6rem;
  width: 14rem;
`;

export const Rights = styled.div`
  color: var(--color-grey-300);
  font-size: 1.2rem;
  text-transform: uppercase;
`;

export const Menu = styled.div`
  padding: 6rem 0;
  width: 120rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  justify-content: space-between;
`;

export const FooterContainer = styled.div`
  color: var(--color-grey-600);
  font-size: 1.4rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
