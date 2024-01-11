import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import GlobalStyles from "./styles/GlobalStyle";
import { useDarkMode } from "./context/DarkModeContext.jsx";

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
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
