import { TextField } from "@material-ui/core";
import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
type LoginType = {
  mail: string;
  password: string;
};

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>({
    defaultValues: {
      mail: "",
      password: "",
    },
  });

  const getLoginIDAndPassword = async (data: LoginType) => {
    try {
      const res = await axios.post("http://localhost:8080/login", data);

      if (res.status === 200) {
        const { token } = res.data;
        await login(data.mail, data.password, token); // トークンをlogin関数に渡す
        navigate("/"); // トップページへリダイレクト
      }
    } catch (error) {
      setError("パスワードかメールアドレスが違ってます。");
      console.log(error);
    }
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit(getLoginIDAndPassword)}>
        <Box
          sx={{
            backgroundColor: "#EEEEEE",
            height: "100vh",
            width: "100vw",
            margin: 0,
            padding: 0, // paddingを0に設定
            display: "flex",
            alignItems: "center", // 垂直方向の中央揃え
            justifyContent: "center", // 水平方向の中央揃え
          }}
        >
          <Box
            sx={{
              width: 500,
              height: 444,
              backgroundColor: "white",
              alignItems: "center",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              borderRadius: 2,
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <Box sx={{ textAlign: "center", mt: 10 }}>ログイン</Box>
            <Box>
              <Box>
                <Typography>メールアドレス</Typography>
                <Controller
                  control={control}
                  name="mail"
                  rules={{
                    required: "メールアドレスは必須です", // 追加: 必須入力チェック
                  }}
                  render={({ field, formState, fieldState }) => (
                    <>
                      {errors.mail && (
                        <Box sx={{ color: "red" }}>{errors.mail.message}</Box>
                      )}
                      <TextField {...field} variant="outlined" />
                    </>
                  )}
                />
              </Box>
              <Box>
                <Typography>パスワード</Typography>
                <Controller
                  control={control}
                  name="password"
                  rules={{
                    required: "パスワードは必須です",
                  }}
                  render={({ field, formState, fieldState }) => (
                    <>
                      {errors.password && (
                        <Box sx={{ color: "red" }}>
                          {errors.password.message}
                        </Box>
                      )}
                      <TextField {...field} variant="outlined" />
                    </>
                  )}
                />
              </Box>
            </Box>
            <Button type="submit" variant="outlined">
              ログイン
            </Button>
            {error && <p>{error}</p>}
          </Box>
        </Box>
      </Box>
    </>
  );
};
