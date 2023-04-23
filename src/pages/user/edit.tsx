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
      firstName: "",
      lastName: "",
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
          firstName: res.data.firstName,
          lastName: res.data.lastName,
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
            name="firstName"
            render={({ field, formState }) => (
              <TextField variant="outlined" {...field} />
            )}
          />
        </Box>
        <Box>
          <Controller
            control={control}
            name="lastName"
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
