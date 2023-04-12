import { Button, Stack } from "@chakra-ui/react";
import { Box, TextField } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { AllUserType } from "../../types/user/UserType";

export const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    handleSubmit,
    control,
    // formState: { errors },
    reset,
  } = useForm<AllUserType>({
    defaultValues: {
      id: 0,
      firstNane: "",
      lastNane: "",
      age: 0,
      mail: "",
      password: "",
    },
  });

  const fetchEditUser = async () => {
    const res = await axios.get<AllUserType>(
      `http://localhost:8080/users/${id}`
    );
    try {
      if (res.status === 200 && res.data) {
        reset({
          id: res.data.id,
          firstNane: res.data.firstNane,
          lastNane: res.data.lastNane,
          age: res.data.age,
          mail: res.data.mail,
          password: res.data.mail,
        });
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchEditUser();
  }, []);

  const onSubmit = async (data: AllUserType) => {
    data.age = Number(data.age); // ageプロパティを数値型に変換する
    await axios.post("http://localhost:8080/users", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  return (
    <>
      <h3>編集ページ</h3>
      <Stack
        sx={{
          width: 500,
          maxWidth: "100%",
          margin: "0 auto",
          alignItems: "center",
        }}
        style={{ textAlign: "center" }}
        spacing={10}
      >
        <Box>
          <Controller
            control={control}
            name="firstNane"
            render={({ field, formState }) => (
              <TextField variant="outlined" {...field} />
            )}
          />
        </Box>
        <Box>
          <Controller
            control={control}
            name="lastNane"
            render={({ field, formState }) => (
              <TextField variant="outlined" {...field} />
            )}
          />
        </Box>
        <Box>
          <Controller
            control={control}
            name="age"
            render={({ field, formState }) => (
              <TextField variant="outlined" {...field} />
            )}
          />
        </Box>
        <Box>
          <Controller
            control={control}
            name="mail"
            render={({ field, formState }) => (
              <TextField variant="outlined" {...field} />
            )}
          />
        </Box>
        <Box>
          <Controller
            control={control}
            name="password"
            render={({ field, formState }) => (
              <TextField variant="outlined" {...field} />
            )}
          />
        </Box>
        <Box>
          <Button onClick={handleSubmit(onSubmit)}>登録</Button>
        </Box>
      </Stack>
    </>
  );
};
