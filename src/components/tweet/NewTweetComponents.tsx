import { Box, Button, Grid, Input, InputLabel, styled } from "@mui/material";
import React, { useState } from "react";
import { FormComponents } from "../form/FormComponents";
import { Controller, useForm } from "react-hook-form";
import { TweetType } from "../../types/tweet/TweetType";
import { useAuth } from "../../contexts/AuthContext";

const CustomButton = styled(Button)(() => ({
  width: "300px",
  height: "70px",
  fontWeight: "bold",
  borderWidth: "3px",
  fontSize: "20px",
}));

export const NewTweetComponents = () => {
  const { control, handleSubmit } = useForm<TweetType>({
    defaultValues: {
      id: 0,
      tweet_content: "",
      image: "",
      user_id: 0,
    },
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result as string;
        setPreviewImage(dataUrl);
      };
      reader.readAsDataURL(file);
      setImageFile(file); // 画像ファイルを状態変数に保存
    } else {
      setPreviewImage(null);
      setImageFile(null); // 画像ファイルを状態変数に保存
    }
  };

  const test = (data: TweetType) => {
    const updatedData: TweetType = {
      ...data,
    };

    const formData = new FormData();
    formData.append("tweet_content", updatedData.tweet_content);
    formData.append("user_id", updatedData.user_id.toString()); // userIdを追加
    if (imageFile) {
      formData.append("image", imageFile);
    }
    // ここで formData をサーバーに送信
    console.log(updatedData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(test)}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 12 }}
        >
          {/* 自分の写真 */}
          {/* 画像投稿 */}
          <FormComponents
            control={control}
            name={"tweet_content"}
            // label={"今何してる？"}
            multiline={true}
            rows={10}
            placeholder={"今何してる？"}
            width={"1000px"}
            borderColor={"#00bcd4"}
            borderWidth={"5px"}
          />
          <InputLabel sx={{ mt: 5 }} htmlFor="image-upload">
            画像を選択
          </InputLabel>
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                type="file"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  handleImageChange(e);
                  field.onChange(e);
                }}
              />
            )}
          />

          {previewImage && (
            <Box>
              <img
                src={previewImage}
                alt="preview"
                style={{ width: "700px", height: "450px" }}
              />
            </Box>
          )}
          <Box mt={3}>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <CustomButton
                  variant="outlined"
                  color="error"
                  size="large"
                  sx={{
                    width: "300px",
                    height: "70px",
                    fontWeight: "bold",
                    borderWidth: "3px",
                    fontSize: "20px",
                  }}
                >
                  キャンセル
                </CustomButton>
              </Grid>
              <Grid item>
                <CustomButton
                  variant="outlined"
                  size="large"
                  sx={{
                    width: "300px",
                    height: "70px",
                    fontWeight: "bold",
                    borderWidth: "3px",
                    fontSize: "20px",
                  }}
                  onClick={handleSubmit(test)}
                >
                  ツイートする
                </CustomButton>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </form>
    </>
  );
};
