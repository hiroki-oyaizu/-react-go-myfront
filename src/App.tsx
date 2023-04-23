import { Link, Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

function App() {
  useEffect(() => {
    console.log("App component mounted.");
  }, []);

  return (
    <>
      <Header />
      <Box style={{ textAlign: "center" }}>
        <h1>Todoアプリ</h1>
        <Link to="/users">ユーザー一覧</Link>
        <Link to="/tweet/new">投稿</Link>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default App;
