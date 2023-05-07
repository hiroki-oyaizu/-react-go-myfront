import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import dummy from "../../project/images/screenshot.png";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { useAuth } from "../../contexts/AuthContext";

export const CustomTextField = styled(TextField)({
  backgroundColor: "white",
  width: 552,
  height: 45,
  borderRadius: "0 0 0 3px",
  "&:focus": {
    outline: "none",
  },
  "& .Mui-focused": {
    outline: "none",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
      borderWidth: 1,
    },
  },
});
export const Header = () => {
  const { userId, firstName, lastName, isLoggedIn, logout } = useAuth();

  useEffect(() => {}, [firstName, lastName, userId]);
  return (
    <Box
      sx={{
        height: 80,
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: " #131921;",
        color: "white",
        alignItems: "center",
        "& img": {
          // imgタグに対するスタイル指定
          alignSelf: "flex-start", // alignItemsを無効にするスタイルを指定
        },
      }}
    >
      <img src={dummy} width="100" height="80" />
      <Box>
        <CustomTextField />
        <Button sx={{ backgroundColor: "orange", height: 45 }}>
          <SearchIcon />
        </Button>
      </Box>
      <Box>
        こんにちは {firstName} {lastName} さん (ID: {userId})
      </Box>
      <Button
        variant="contained"
        color="error"
        component={Link}
        to="/listing/new"
      >
        <Typography sx={{ color: "white" }}>出品する</Typography>
        <Inventory2Icon />
      </Button>

      <Box sx={{ display: "block" }}>
        {isLoggedIn ? (
          <Box>
            <Button onClick={logout}>ログアウト</Button>
          </Box>
        ) : (
          <Box sx={{ display: "flex" }}>
            <Box>
              <Link to="/users/new" style={{ marginRight: "10px" }}>
                ユーザ新規登録
              </Link>
            </Box>
            <Box>
              <Link to="/login">ログイン</Link>
            </Box>
          </Box>
        )}
      </Box>
      <Box>カート</Box>
    </Box>
  );
};
