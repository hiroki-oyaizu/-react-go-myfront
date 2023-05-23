import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

type Props = {
  children?: React.ReactNode;
  open: boolean;
  handleClose: () => void;
  width?: string;
  height?: string;
  fontSize?: number;
  bgcolor?: string;
  border?: string;
  p?: string;
  maxHeight?: string;
};

export const ModalComponents = ({
  open,
  handleClose,
  width,
  height,
  fontSize,
  bgcolor = "white",
  border,
  p,
  maxHeight,
  children,
}: Props) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as const,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: width,
            fontSize: fontSize,
            bgcolor: bgcolor,
            border: border,
            boxShadow: 24,
            p: 4,
            borderRadius: "20px",
            padding: p,
            overflow: "auto",
            maxHeight: maxHeight,
          }}
        >
          {children}
        </Box>
      </Modal>
    </>
  );
};
