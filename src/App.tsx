import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Box style={{ textAlign: "center" }}>
        <h1>Todoアプリ</h1>
        <Link to="/users">ユーザー一覧</Link>
        <Outlet />
      </Box>
    </>
  );
}

export default App;
