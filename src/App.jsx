import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Post from "./pages/Post/Post";
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
        path: "/commentaries/:slug",
        element: <Post />,
      },
      {
        path: "/opinion",
        element: <Opinion />,
      },
      {
        path: "/opinion/:slug",
        element: <Post />,
      },
      {
        path: "/fsi-analysis",
        element: <FsiAnalysis />,
      },
      {
        path: "/fsi-analysis/:slug",
        element: <Post />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/event/:slug",
        element: <Post />,
      },
      {
        path: "/fsi-on-the-news",
        element: <FsiOnTheNews />,
      },
      {
        path: "/fsi-on-the-news/:slug",
        element: <Post />,
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
