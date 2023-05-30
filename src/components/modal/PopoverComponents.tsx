import React from "react";
import Popover from "@mui/material/Popover";
type Props = {
  open: boolean;
  anchorEl: HTMLButtonElement | null;
  children?: React.ReactNode;
  handleClose: () => void;
};
export const PopoverComponents = ({
  open,
  handleClose,
  anchorEl,
  children,
}: Props) => {
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
      {children}
    </Popover>
  );
};
