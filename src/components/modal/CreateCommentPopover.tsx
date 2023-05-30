import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { TweetType } from "../../types/tweet/TweetType";

type Props = {
  tweetId: number | undefined;
};

type CreateCommentType = {
  comment: string;
};

export const CreateCommentPopover = ({ tweetId }: Props) => {
  const { control, handleSubmit } = useForm<CreateCommentType>({
    defaultValues: { comment: "" },
  });
  const { userId } = useAuth();
  const CreateCommentSubmit = async (data: CreateCommentType) => {
    axios.post("http://localhost:8080/comments", {
      userId: userId,
      tweetId: tweetId,
      comment: data.comment,
    });
    console.log(userId);
    console.log(tweetId);
    console.log(data.comment);
  };
  return (
    <>
      <form onSubmit={handleSubmit(CreateCommentSubmit)}>
        <Box
          sx={{
            height: 500,
            width: 600,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Controller
            control={control}
            name="comment"
            render={({ field }) => (
              <>
                <TextField
                  {...field}
                  variant="outlined"
                  placeholder="コメント"
                  multiline
                  rows={8}
                  sx={{ width: 300, mt: 10 }}
                />
              </>
            )}
          />

          <Button type="submit" sx={{ width: 300, mb: 10 }} variant="contained">
            送信
          </Button>
        </Box>
      </form>
    </>
  );
};
