import React from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
type Props = {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  firstName: string | undefined;
  lastName: string | undefined;
  handleClose: () => void;
};
export const PopoverComponents = ({
  open,
  firstName,
  lastName,
  handleClose,
  anchorEl,
}: Props) => {
  console.log(firstName);
  return (
    <Popover
      open={open}
      onClose={handleClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Box p={2}>
        <Typography>
          {firstName}
          {lastName}さんをフォローする
        </Typography>
        <Typography>プロフィールを見る</Typography>
        <Typography>報告する</Typography>
      </Box>
    </Popover>
  );
};
