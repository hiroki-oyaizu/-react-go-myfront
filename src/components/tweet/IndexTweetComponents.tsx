import React, { useEffect } from "react";
import { TweetType } from "../../types/tweet/TweetType";
import { Box, Button, TextField, styled } from "@mui/material";
import { LeftSideBar } from "../layout/sidebar/LeftSideBar";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SmsIcon from "@mui/icons-material/Sms";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
export const CustomSearchTextField = styled(TextField)({
  backgroundColor: "white",
  width: 480,
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
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "none",
      },
    },
  },
  "& fieldset": {
    borderColor: "transparent",
  },
});
type Props = {
  allTweets: TweetType[];
  GetAllTweets: () => void;
};

export const IndexTweetComponents = ({ allTweets, GetAllTweets }: Props) => {
  useEffect(() => {
    GetAllTweets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: "black",
        width: "100vw",
        height: "100vh",
        display: "flex",
      }}
    >
      <Box sx={{ width: "10%", backgroundColor: "white" }}>
        <LeftSideBar />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          overflowY: "auto",
        }}
      >
        {allTweets.map((tweet: TweetType) => {
          return (
            <Box
              key={tweet.id}
              sx={{
                border: "1px solid rgb(47, 51, 54);",
                padding: "16px",
                marginBottom: "16px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                {tweet.profileImage && (
                  <Box mr={2}>
                    <Link to={`/users/${tweet.user_id}`}>
                      <img
                        src={tweet.profileImage}
                        alt="tweet"
                        style={{
                          display: tweet.profileImage ? "block" : "none",
                          width: "68px",
                          height: "68px",
                          borderRadius: "50%",
                        }}
                      />
                    </Link>
                  </Box>
                )}
                <Box
                  sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
                >
                  <Box sx={{ color: "white", fontSize: "20px" }}>
                    {tweet.firstName} {tweet.lastName}
                  </Box>
                  <Box sx={{ color: "white", mt: 2 }}>
                    {tweet.tweet_content}
                  </Box>
                  {tweet.image && (
                    <Box mr={2}>
                      <img
                        src={tweet.image}
                        alt="tweet"
                        style={{
                          display: tweet.image ? "block" : "none",
                          width: "888px",
                          height: "348px",
                          marginTop: "30px",
                          borderRadius: "5%",
                        }}
                      />
                    </Box>
                  )}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "400px", // ここで間隔を調整できます
                      marginTop: "10px",
                    }}
                  >
                    <FavoriteIcon sx={{ color: "white" }} />
                    <SmsIcon sx={{ color: "white" }} />
                    <AutorenewIcon sx={{ color: "white" }} />
                    <AlignVerticalBottomIcon sx={{ color: "white" }} />
                  </Box>
                </Box>
                <Button>フォローする</Button>
                <MoreHorizIcon sx={{ color: "white" }} />
              </Box>
            </Box>
          );
        })}
      </Box>

      <Box sx={{ width: "30%", backgroundColor: "black" }}>
        <Box sx={{ mt: 3, ml: 3 }}>
          <CustomSearchTextField
            sx={{
              borderRadius: "20px",
              textAlign: "center",
              p: "7px",
              border: "none",
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "transparent",
                },
              },
            }}
            inputProps={{
              style: { fontSize: "20px", lineHeight: "15px" },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          ></CustomSearchTextField>
        </Box>
      </Box>
    </Box>
  );
};
