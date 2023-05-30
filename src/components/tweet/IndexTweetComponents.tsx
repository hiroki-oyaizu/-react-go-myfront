import React, { useEffect, useState } from "react";
import { TweetType } from "../../types/tweet/TweetType";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { LeftSideBar } from "../layout/sidebar/LeftSideBar";
import { Link } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SmsIcon from "@mui/icons-material/Sms";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import { PopoverComponents } from "../modal/PopoverComponents";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { CreateCommentPopover } from "../modal/CreateCommentPopover";
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
  const { userId } = useAuth();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [anchorElComment, setAnchorElComment] =
    React.useState<HTMLButtonElement | null>(null);
  const [selectedTweet, setSelectedTweet] = useState<TweetType | null>(null);

  const [commentModal, setCommentModal] = useState<boolean>(false);
  const handleOpenClickCommentModal = (
    event: React.MouseEvent<HTMLButtonElement>,
    tweet: TweetType
  ) => {
    setAnchorElComment(event.currentTarget);
    setSelectedTweet(tweet);
    setCommentModal(true);
  };
  const handleCloseClickCommentModal = () => setCommentModal(false);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    tweet: TweetType
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedTweet(tweet); // ポップオーバーを開いたツイートの情報を保存します。
    setOpen(true);
  };

  const closeModal = () => setOpen(false);

  const [likeCounts, setLikeCounts] = useState<{ [key: string]: number }>({});
  const getAllLikeCount = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/like/all`);
      console.log(res.data);
      if (res.status === 200 && res.data) {
        setLikeCounts(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleLike = async (tweetId: number) => {
    // ここでいいねを実行する API を呼び出す
    await axios.post("http://localhost:8080/like", {
      user_id: userId,
      tweet_id: tweetId,
    });
    try {
      // いいねを実行した後、そのツイートのいいね数を取得
      const url = `http://localhost:8080/like/${tweetId}`;
      console.log(`Request URL: ${url}`);
      const res = await axios.get(url);

      console.log(res.data.likeCount);
      // 前の状態をコピーして新しいいいね数で更新
      setLikeCounts((prevState) => ({
        ...prevState,
        [tweetId]: res.data.likeCount,
      }));
    } catch (error) {
      console.error("Error updating like count:", error);
    }
  };

  useEffect(() => {
    GetAllTweets();
    getAllLikeCount();
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
          width: "70%",
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
                          width: "588px",
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
                      marginTop: "10px",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <FavoriteIcon
                        sx={{ color: "white" }}
                        onClick={() => handleLike(tweet.id)}
                      />
                      <Box sx={{ color: "white", marginLeft: "8px" }}>
                        {likeCounts[tweet.id] ? likeCounts[tweet.id] : 0}
                      </Box>
                    </Box>
                    <Button
                      onClick={(event) =>
                        handleOpenClickCommentModal(event, tweet)
                      }
                    >
                      <SmsIcon sx={{ color: "white" }} />
                    </Button>
                    <AutorenewIcon sx={{ color: "white" }} />
                    <AlignVerticalBottomIcon sx={{ color: "white" }} />
                  </Box>
                </Box>
                <Button
                  sx={{ mt: -55 }}
                  onClick={(event) => handleClick(event, tweet)}
                >
                  <MoreHorizIcon sx={{ color: "white" }} />
                </Button>
                <PopoverComponents
                  open={open}
                  anchorEl={anchorEl}
                  handleClose={closeModal}
                >
                  <Box p={2}>
                    <Typography>
                      {selectedTweet?.firstName}
                      {selectedTweet?.lastName}さんをフォローする
                    </Typography>
                    <Typography>プロフィールを見る</Typography>
                    <Typography>報告する</Typography>
                  </Box>
                </PopoverComponents>
                <PopoverComponents
                  open={commentModal}
                  anchorEl={anchorElComment}
                  handleClose={handleCloseClickCommentModal}
                >
                  <CreateCommentPopover tweetId={selectedTweet?.id} />
                </PopoverComponents>
              </Box>
            </Box>
          );
        })}
      </Box>

      <Box sx={{ width: "30%", backgroundColor: "black" }}></Box>
    </Box>
  );
};
