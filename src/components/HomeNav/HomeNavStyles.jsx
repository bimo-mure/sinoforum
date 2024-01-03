import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;

export const Menu = styled.div`
  width: 110rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MenuWrapper = styled.li`
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;

export const MenuWrapperExtra = styled.li`
  display: flex;
  flex-direction: row;
`;

export const MenuItem = styled.h3`
  padding: 3rem 0;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const About = styled.h3`
  padding: 3rem 2rem;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  background: var(--color-grey-100);
`;

export const Contact = styled.h3`
  padding: 3rem 2rem;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  background: var(--color-red-600);
  color: var(--color-grey-50);
`;
