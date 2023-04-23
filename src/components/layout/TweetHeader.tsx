import { Box, Button } from "@mui/material";
import React from "react";
import tweetLogo from "../../project/images/tweet.jpg";
import starLogo from "../../project/images/star.jpeg";
export const TweetHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid blue",
        width: "100%",
        height: "100px",
      }}
    >
      <Button>戻る</Button>
      <img src={tweetLogo} width="100" height="100" />
      <img src={starLogo} width="100" height="100" />
    </Box>
  );
};
