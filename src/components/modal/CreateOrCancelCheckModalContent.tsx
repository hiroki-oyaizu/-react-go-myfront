import { Button, Typography, Box } from "@mui/material";
import React from "react";

type Props = {
  handleClose: () => void;
  postFollow: (id: number) => void;
  userIdToFollow: number | undefined;
};

export const CreateOrCancelCheckModalContent = ({
  handleClose,
  postFollow,
  userIdToFollow,
}: Props) => {
  console.log("userIdToFollow", userIdToFollow);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        p: 2,
        bgcolor: "background.paper",
        borderRadius: 1,
      }}
    >
      <Typography>フォローしますか？</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          mt: 2,
        }}
      >
        <Button variant="outlined" color="secondary" onClick={handleClose}>
          キャンセル
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            if (userIdToFollow !== undefined) {
              postFollow(userIdToFollow);
            }
          }}
        >
          フォローする
        </Button>
      </Box>
    </Box>
  );
};
