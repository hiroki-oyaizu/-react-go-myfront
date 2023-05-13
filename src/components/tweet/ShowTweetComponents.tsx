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

export const ShowTweetComponents = () => {
  const { id } = useParams();
  const { userId } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState<AllUserType>();

  const deleteUser = async () => {
    await axios.delete(`http://localhost:8080/users/${id}`);
    navigate("/");
  };

  const goToEditUserPage = () => {
    navigate(`/users/edit/${id}`);
  };

  const goToAllTweetPage = () => navigate("/");

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
  useEffect(() => {
    fetchUser();
  }, []);

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
            ) : (
              <CustomProfileOrFollowButton sx={{ color: "white" }}>
                フォーロー
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
    </>
  );
};
