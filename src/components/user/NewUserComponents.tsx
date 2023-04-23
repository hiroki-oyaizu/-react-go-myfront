import { Box, Button, TextField } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { AllUserType } from "../../types/user/UserType";
import { Grid, Stack, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { SelectComponents } from "../../components/form/SelectComponents";
import { DayOptions, MonthOptions, YearOptions } from "../../utils/Utils";
const useStyles = makeStyles({
  formBox: {
    width: 500,
    maxWidth: "100%",
    margin: "0 auto",
    marginTop: 50,
    padding: 20,
    borderRadius: 5,
    backgroundColor: "#fff",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.3)",
    textAlign: "center",
  },
  inputBox: {
    marginBottom: 20,
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
  submitButton: {
    backgroundColor: "#008CBA",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#005F6B",
    },
  },
});

type Props = {
  onSubmit: (data: AllUserType) => void;
};

export const NewUserComponents = ({ onSubmit }: Props) => {
  const classes = useStyles();
  const { handleSubmit, control } = useForm<AllUserType>({
    defaultValues: {
      id: 0,
      firstName: "",
      lastName: "",
      age: 0,
      mail: "",
      password: "",
      profilePicture: "",
      birthDay: {
        year: 1980,
        month: 1,
        day: 1,
      },
    },
  });

  return (
    <Box className={classes.formBox}>
      <Typography variant="h5" component="h1" gutterBottom>
        新規登録
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
              name="lastName"
              render={({ field }) => (
                <TextField variant="outlined" label="姓" fullWidth {...field} />
              )}
            />
          </Box>
          <Box className={classes.inputBox} sx={{ width: "48%" }}>
            <Controller
              control={control}
              name="firstName"
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
        <Box>
          <Button
            className={classes.submitButton}
            onClick={handleSubmit(onSubmit)}
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
