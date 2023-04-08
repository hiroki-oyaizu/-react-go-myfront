// src/Routers/Router.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { ErrorPage } from "../components/ErrorPage";
import { ArticleIndex } from "../pages/article";
import { ArticleNew } from "../pages/article/new";
import { Login } from "../pages/login/Login";
import { Test } from "../pages/Test";
import { NewTweet } from "../pages/tweet/new";
import { IndexUser } from "../pages/user";
import { EditUser } from "../pages/user/edit";
import { NewUsers } from "../pages/user/new";
import { ShowUser } from "../pages/user/show.";
import { UserIndex } from "../pages/UserIndex";
import { AuthProvider } from "../contexts/AuthContext";
import { PrivateRoute } from "./PrivateRoute";

export const Router = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <App />
                </PrivateRoute>
              }
            />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
          <Routes>
            <Route path="/test" element={<Test />} />
            <Route path="/user" element={<UserIndex />} />
            <Route path="/article" element={<ArticleIndex />} />
            <Route path="/article/new" element={<ArticleNew />} />
            <Route path="/users" element={<IndexUser />} />
            <Route path="/users/new" element={<NewUsers />} />
            <Route path="/users/:id" element={<ShowUser />} />
            <Route path="/users/edit/:id" element={<EditUser />} />
            <Route path="/tweet/new" element={<NewTweet />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};
