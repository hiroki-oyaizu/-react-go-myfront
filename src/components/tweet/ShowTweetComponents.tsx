/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AllUserType } from "../../types/user/UserType";
import { Box, Button } from "@mui/material";
import { LeftSideBar } from "../../components/layout/sidebar/LeftSideBar";
import { styled } from "@mui/material";
import bgImage from "../../project/images//BackImage.jpeg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useAuth } from "../../contexts/AuthContext";
import { ModalComponents } from "../modal/ModalComponents";
import { CreateOrCancelCheckModalContent } from "../modal/CreateOrCancelCheckModalContent";
import { FollowType } from "../../types/Follow/FollowType";
export const CustomProfileOrFollowButton = styled(Button)({
  color: "white",
  fontSize: 20,
  fontWeight: 700,
  border: "1px solid white",
  borderRadius: "20px",
  height: "40px",
  marginTop: "45px",
  marginRight: "45px",
});
const data = [
  {
    name: "",
    address: { street: "", city: "", zipCode: "" },
    books: [
      { title: "", author: "", published: "" },
      { title: "", author: "", published: "" },
    ],
    sections: [
      {
        name: "",
        books: [
          { title: "", author: "", published: "" },
          { title: "", author: "", published: "" },
        ],
      },
    ],
  },
];
export const ShowTweetComponents = () => {
  const { id } = useParams();
  const { userId } = useAuth();
  const [user, setUser] = useState<AllUserType>();
  const [comment, setComment] = useState<string>("");
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const navigate = useNavigate();
  const goToAllTweetPage = () => navigate("/");

  const deleteUser = async () => {
    await axios.delete(`http://localhost:8080/users/${id}`);
    navigate("/");
  };

  const goToEditUserPage = () => {
    navigate(`/users/edit/${id}`);
  };

  const fetchUser = async () => {
    const res = await axios.get<AllUserType>(
      `http://localhost:8080/users/${id}`
    );
    try {
      if (res.status === 200 && res.data) {
        setUser(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postFollow = async (id: number) => {
    const createData: FollowType = { user_id: userId, follow_user_id: id };
    console.log(createData);
    await axios.post(`http://localhost:8080/follow/new`, createData);
  };
  const [isFollowing, setIsFollowing] = useState(false);

  const checkFollowStatus = async () => {
    const res = await axios.get(
      `http://localhost:8080/follow/isFollowing?loggedInUserId=${userId}&targetUserId=${id}`
    );
    try {
      if (res.status === 200 && res.data) {
        setIsFollowing(res.data.isFollowing);
        // console.log(res.data.isFollowing);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const unfollow = async (id: number) => {
    const unfollowData: FollowType = { user_id: userId, follow_user_id: id };
    await axios.post(`http://localhost:8080/follow/unfollow`, unfollowData);
    setIsFollowing(false); // update the local state
  };

  const fetchComment = async () => {
    const res = await axios.get(`http://localhost:8080/comments/${id}`);
    try {
      if (res.status === 200 && res.data) {
        setComment(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
    checkFollowStatus();
  }, [userId, id]);

  return (
    <>
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
            width: "60%",
            display: "flex",
            flexDirection: "column",
            border: "1px solid rgb(47, 51, 54);",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <ArrowBackIcon
              sx={{
                color: "rgb(231, 233, 234)",
                fontWeight: 700,
                ml: 4,
                mt: 3,
                mb: 5,
              }}
              onClick={goToAllTweetPage}
            />
            <Box
              sx={{
                color: "rgb(231, 233, 234)",
                fontWeight: 700,
                fontSize: "20px",
                ml: 5,
                mt: 1,
              }}
            >
              {user?.firstName}
              {user?.lastName}
            </Box>
          </Box>
          <img src={bgImage} height="170" />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {user?.profileImage && (
              <Box mt={-4} ml={3} sx={{ width: "200px" }}>
                <img
                  src={user.profileImage}
                  alt="user"
                  style={{
                    display: user.profileImage ? "block" : "none",
                    width: "188px",
                    height: "188px",
                    borderRadius: "50%",
                  }}
                />
              </Box>
            )}
            {userId === user?.id ? (
              <CustomProfileOrFollowButton onClick={goToEditUserPage}>
                プロフィール編集
              </CustomProfileOrFollowButton>
            ) : isFollowing ? (
              <CustomProfileOrFollowButton
                sx={{ color: "white" }}
                onClick={() => user?.id && unfollow(user?.id)}
              >
                フォロー中
              </CustomProfileOrFollowButton>
            ) : (
              <CustomProfileOrFollowButton
                sx={{ color: "white" }}
                onClick={openModal}
              >
                フォロー
              </CustomProfileOrFollowButton>
            )}
          </Box>

          <Box sx={{ color: "white", fontSize: "20px" }}>
            {user?.firstName}
            {user?.lastName}
          </Box>
        </Box>

        <Box sx={{ width: "20%", backgroundColor: "black" }}>
          <Box sx={{ mt: 3, ml: 3 }}>
            <Box sx={{ mt: 3, ml: 3 }}></Box>
          </Box>
        </Box>
      </Box>
      <ModalComponents
        width={"300px"}
        height={"70px"}
        open={open}
        handleClose={closeModal}
      >
        <CreateOrCancelCheckModalContent
          handleClose={closeModal}
          postFollow={postFollow}
          userIdToFollow={user?.id}
        />
      </ModalComponents>
    </>
  );
};
