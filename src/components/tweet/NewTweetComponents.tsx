import { Box, Button, Grid, Input, InputLabel, styled } from "@mui/material";
import React, { useState } from "react";
import { FormComponents } from "../form/FormComponents";
import { Controller, useForm } from "react-hook-form";
import { TweetType } from "../../types/tweet/TweetType";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const { userId } = useAuth();
  const navigate = useNavigate();

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

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const test = async (data: TweetType) => {
    const updatedData: TweetType = {
      ...data,
      user_id: userId,
    };

    if (imageFile) {
      // 画像ファイルが選択された場合、Base64形式に変換して追加
      try {
        const base64Image = await toBase64(imageFile);
        updatedData.image = base64Image;
      } catch (error) {
        console.error("Image conversion to Base64 failed: ", error);
      }
    }

    await axios.post("http://localhost:8080/tweet/new", updatedData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
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
          <FormComponents
            control={control}
            name={"tweet_content"}
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
