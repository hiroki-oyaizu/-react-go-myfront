import { Box } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import dummy from "../../../project/images/tweet.jpg";
import tweetMark from "../../../project/images/newTweetMark.png";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Link } from "react-router-dom";
export const LeftSideBar = () => {
  const iconSize = 55;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
        backgroundColor: "black",
        height: "100vh",
      }}
    >
      <Box sx={{ mt: 3 }}>
        <img
          src={dummy}
          width={iconSize}
          height={iconSize}
          style={{ borderRadius: "50%" }}
        />
      </Box>
      <Box>
        <HomeIcon sx={{ width: iconSize, height: iconSize, color: "white" }} />
      </Box>
      <Box>
        <NotificationsIcon
          sx={{ width: iconSize, height: iconSize, color: "white" }}
        />
      </Box>
      <Box>
        <EmailIcon sx={{ width: iconSize, height: iconSize, color: "white" }} />
      </Box>
      <Box>
        <BookmarkIcon
          sx={{ width: iconSize, height: iconSize, color: "white" }}
        />
      </Box>
      <Box>
        <AccountBoxIcon
          sx={{ width: iconSize, height: iconSize, color: "white" }}
        />
      </Box>
      <Box>
        <Link to={"/tweet/new"}>
          <img
            src={tweetMark}
            width={iconSize}
            height={iconSize}
            style={{ borderRadius: "50%" }}
          />
        </Link>
      </Box>
    </Box>
  );
};
