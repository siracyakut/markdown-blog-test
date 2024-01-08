import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import Home from "../pages/home";
import Blog from "../pages/blog";
import PrivateRoute from "../components/private-route";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blogs/:slug",
        element: (
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: (
          <p className="p-4 rounded bg-red-200 text-red-700">404 Not Found</p>
        ),
      },
    ],
  },
]);

export default routes;
