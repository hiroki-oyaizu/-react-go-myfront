import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import { ErrorPage } from "../components/ErrorPage";
import { Test } from "../pages/Test";
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
]);
export const Router = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
