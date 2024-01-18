import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import GlobalStyles from "./styles/GlobalStyle";
import { useDarkMode } from "./context/DarkModeContext.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
const queryClient = new QueryClient();

function App() {
  const { darkMode } = useDarkMode();
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <GlobalStyles />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
