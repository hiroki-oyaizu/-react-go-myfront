import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
function App() {
  return (
    <>
      <Box style={{ textAlign: "center" }}>
        <h1>Todoアプリ</h1>
        <Outlet />
      </Box>
    </>
  );
}

export default App;
