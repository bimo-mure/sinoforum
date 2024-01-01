import styled from "styled-components";
import { Outlet } from "react-router-dom";

const Main = styled.main`
  background-color: var(--color-grey-0);
  max-width: 130rem;
`;

function AppLayout() {
  return (
    <div>
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
