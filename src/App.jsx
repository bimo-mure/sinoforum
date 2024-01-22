import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import GlobalStyles from "./styles/GlobalStyle";
import { useDarkMode } from "./context/DarkModeContext.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Commentaries from "./pages/Commentaries.jsx";
import Opinion from "./pages/Opinion.jsx";
import FsiAnalysis from "./pages/FsiAnalysis.jsx";
import Event from "./pages/Event.jsx";
import FsiOnTheNews from "./pages/FsiOnTheNews.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/commentaries",
        element: <Commentaries />,
      },
      {
        path: "/opinion",
        element: <Opinion />,
      },
      {
        path: "/opinion/:slug",
        element: <Opinion />,
      },
      {
        path: "/fsi-analysis",
        element: <FsiAnalysis />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/fsi-on-the-news",
        element: <FsiOnTheNews />,
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
