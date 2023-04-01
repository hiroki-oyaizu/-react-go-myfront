import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import { ErrorPage } from "../components/ErrorPage";
import { ArticleIndex } from "../pages/article";
import { ArticleNew } from "../pages/article/new";
import { Test } from "../pages/Test";
import { IndexUser } from "../pages/user";
import { NewUsers } from "../pages/user/new";
import { UserIndex } from "../pages/UserIndex";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/user",
    element: <UserIndex />,
  },
  {
    path: "/article",
    element: <ArticleIndex />,
  },
  {
    path: "/article/new",
    element: <ArticleNew />,
  },
  {
    path: "users",
    element: <IndexUser />,
  },
  {
    path: "users/new",
    element: <NewUsers />,
  },
]);
export const Router = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
