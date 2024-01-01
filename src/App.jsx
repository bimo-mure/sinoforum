import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import GlobalStyles from "./styles/GlobalStyle";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
