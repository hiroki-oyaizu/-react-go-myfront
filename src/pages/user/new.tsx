import { Stack } from "@chakra-ui/react";
import { Box, Button, TextField } from "@material-ui/core";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AllUserType } from ".";
export const NewUsers = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
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
      <Stack
        sx={{
          width: 500,
          maxWidth: "100%",
          margin: "0 auto",
          alignItems: "center",
          mt: 50,
          textAlign: "center",
        }}
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
