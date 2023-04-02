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
import { EditUser } from "../pages/user/edit";
import { NewUsers } from "../pages/user/new";
import { ShowUser } from "../pages/user/show.";
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
    path: "/users",
    element: <IndexUser />,
  },
  {
    path: "/users/new",
    element: <NewUsers />,
  },
  {
    path: "/users/:id",
    element: <ShowUser />,
  },
  {
    path: "/users/edit/:id",
    element: <EditUser />,
  },
]);
export const Router = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
