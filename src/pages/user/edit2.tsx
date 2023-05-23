import React, { useEffect } from "react";
import { Box, Button, InputLabel, TextField, Input } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { AllUserType } from "../../types/user/UserType";
import { Grid, Stack, Typography } from "@mui/material";
import { SelectComponents } from "../../components/form/SelectComponents";
import { DayOptions, MonthOptions, YearOptions } from "../../utils/Utils";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useStyles } from "../../components/user/NewUserComponents";
export const Edit2 = () => {
  const { control, handleSubmit, reset } = useForm<AllUserType>({
    defaultValues: {
      id: 0,
      firstName: "",
      lastName: "",
      age: 0,
      mail: "",
      password: "",
      profilePicture: "",
      profileImage: "",
      birthDay: {
        year: 0,
        month: 0,
        day: 0,
      },
    },
  });
  const [userData, setUserData] = useState(null);
  const { id } = useParams();
  const [previewImages, setPreviewImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const classes = useStyles();
  const navigate = useNavigate();

  const handleImageChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const onSubmits = async (data: AllUserType) => {
    const updateData: AllUserType = {
      ...data,
    };
    if (imageFile) {
      // 画像ファイルが選択された場合、Base64形式に変換して追加
      try {
        const base64Image = await toBase64(imageFile);
        updateData.profileImage = base64Image;
      } catch (error) {
        console.error("Image conversion to Base64 failed: ", error);
      }
    }
    updateData.age = Number(data.age);
    updateData.birthDay.year = Number(data.birthDay.year);
    updateData.birthDay.month = Number(data.birthDay.month);
    updateData.birthDay.day = Number(data.birthDay.day);
    console.log(updateData);
    await axios.post("http://localhost:8080/users", updateData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  const fetchEditUserData = async () => {
    const res = await axios.get<AllUserType>(
      `http://localhost:8080/users/${id}`
    );
    try {
      if (res.status === 200 && res.data) {
        console.log(res.data.id);
        reset({
          id: res.data.id,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          age: res.data.age,
          mail: res.data.mail,
          password: res.data.password,
          profilePicture: res.data.profileImage,
          // profileImage: res.data.profileImage,
          birthDay: {
            year: res.data.birthDay?.year,
            month: res.data.birthDay?.month,
            day: res.data.birthDay?.day,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEditUserData();
  }, []);

  return (
    <Box className={classes.formBox}>
      <Typography variant="h5" component="h1" gutterBottom>
        編集
      </Typography>
      <Stack spacing={3}>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{ flexWrap: "wrap" }}
        >
          <Box
            className={classes.inputBox}
            sx={{ width: "48%", display: "flex" }}
          >
            <Controller
              control={control}
              name="firstName"
              render={({ field }) => (
                <TextField variant="outlined" label="姓" fullWidth {...field} />
              )}
            />
          </Box>
          <Box className={classes.inputBox} sx={{ width: "48%" }}>
            <Controller
              control={control}
              name="lastName"
              render={({ field }) => (
                <TextField variant="outlined" label="名" fullWidth {...field} />
              )}
            />
          </Box>
        </Box>

        <Box className={classes.inputBox}>
          <Controller
            control={control}
            name="age"
            render={({ field }) => (
              <TextField
                variant="outlined"
                label="年齢"
                type="number"
                fullWidth
                {...field}
              />
            )}
          />
        </Box>
        <Box className={classes.inputBox}>
          <Controller
            control={control}
            name="mail"
            render={({ field }) => (
              <TextField
                variant="outlined"
                label="メールアドレス"
                type="email"
                fullWidth
                {...field}
              />
            )}
          />
        </Box>
        <Box className={classes.inputBox}>
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                variant="outlined"
                label="パスワード"
                type="password"
                fullWidth
                {...field}
              />
            )}
          />
        </Box>
        <Box>
          <Typography>生年月日</Typography>
          この情報は公開されません。このアカウントをビジネス、ペットなどに使う場合でも、ご自身の年齢を確認してください。
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <SelectComponents
              control={control}
              options={YearOptions}
              name={"birthDay.year"}
              width={150}
            />
          </Grid>
          <Grid item xs={4}>
            <SelectComponents
              control={control}
              options={MonthOptions}
              name={"birthDay.month"}
              width={140}
            />
          </Grid>
          <Grid item xs={4}>
            <SelectComponents
              control={control}
              options={DayOptions}
              name={"birthDay.day"}
              width={130}
            />
          </Grid>
        </Grid>
        <InputLabel>プロフィール画像を選ぶ</InputLabel>
        <Controller
          name="profileImage"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="file"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleImageChanges(e);
                field.onChange(e);
              }}
            />
          )}
        />
        {previewImages && (
          <Box>
            <img
              src={previewImages}
              alt="preview"
              style={{ width: "500px", height: "450px" }}
            />
          </Box>
        )}
        <Box>
          <Button
            className={classes.submitButton}
            onClick={handleSubmit(onSubmits)}
            variant="contained"
            fullWidth
          >
            登録する
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
