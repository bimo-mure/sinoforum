import styled from "styled-components";
import { Outlet } from "react-router-dom";
import SidebarNavigation from "./components/ButtonNav/ButtonNav";
import Footer from "./components/Footer/Footer";

const Main = styled.main`
  background-color: var(--color-grey-0);
  max-width: 130rem;
`;

function AppLayout() {
  return (
    <Main>
      <SidebarNavigation />
      <Outlet />
      <Footer />
    </Main>
  );
}

export default AppLayout;
