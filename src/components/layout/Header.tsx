import { Box, Button, TextField } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";
import dummy from "../../project/images/screenshot.png";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)({
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
      <Box>こんにちは〜〜〜さん</Box>
      <Box>
        <Link to="/users/new" style={{ marginRight: "10px" }}>
          ユーザ新規登録
        </Link>
        <Link to="/users/new">ログアウト</Link>
      </Box>
      <Box>カート</Box>
    </Box>
  );
};
