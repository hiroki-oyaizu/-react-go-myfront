// src/Routers/Router.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { ErrorPage } from "../components/layout/ErrorPage";
import { ArticleIndex } from "../pages/article";
import { ArticleNew } from "../pages/article/new";
import { Login } from "../pages/login/Login";
import { Test } from "../pages/TEST/Text/Test";
import { IndexUser } from "../pages/user";
import { EditUser } from "../pages/user/edit";
import { ShowUser } from "../pages/user/show.";
import { UserIndex } from "../pages/TEST/Text/UserIndex";
import { AuthContextProvider } from "../contexts/AuthContext";
import { ListingNew } from "../pages/listing/new";
import { NewUser } from "../pages/user/new";
import { NewTweet } from "../pages/tweet/new";
import { IndexTweet } from "../pages/tweet";
import { ShowTweet } from "../pages/tweet/show";
import { Edit2 } from "../pages/user/edit2";
import { Caps } from "../pages/TEST/Text/Caps";
import IndexCaps from "../pages/TEST/Text/IndexCaps";

export const Router = () => {
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                // <PrivateRoute>
                <IndexTweet />
                // </PrivateRoute>
              }
            />
            <Route path="/*" element={<ErrorPage />} />

            <Route path="/test" element={<Test />} />
            <Route path="/user" element={<UserIndex />} />
            <Route path="/article" element={<ArticleIndex />} />
            <Route path="/article/new" element={<ArticleNew />} />

            <Route path="/users" element={<IndexUser />} />
            <Route path="/users/new" element={<NewUser />} />
            <Route path="/users/:id" element={<ShowUser />} />
            <Route path="/users/edit/:id" element={<Edit2 />} />

            <Route path="/tweet" element={<IndexTweet />} />
            <Route path="/tweet/new" element={<NewTweet />} />
            <Route path="/tweet/:id" element={<ShowTweet />} />
            <Route path="/listing/new" element={<ListingNew />} />
            <Route path="/caps" element={<Caps />} />
            <Route path="/capsIndex" element={<IndexCaps />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
};
