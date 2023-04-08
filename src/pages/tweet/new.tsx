import React from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormGroup,
  FormControl,
  FormLabel,
  Checkbox,
  Switch,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
type WeekDays = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";
type TweetType = {
  title: string;
  content: string;
  gender: "male" | "female";
  days: {
    [key in WeekDays]: boolean;
  };
  toggle: boolean;
};
export const NewTweet = () => {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<TweetType>({
    defaultValues: {
      title: "",
      content: "",
      gender: "male",
      days: {
        sun: false,
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
      },
      toggle: false,
    },
  });

  const onSubmit = async (data: TweetType) => {
    await axios.post("http://localhost:8080/tweets/new", JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ mt: 3, ml: 20, textAlign: "center" }}>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                label="タイトルフォーム"
                variant="outlined"
                {...field}
              />
            )}
          />
          <br />

          <Controller
            name="content"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField label="内容" variant="outlined" {...field} />
            )}
          />
          <br />

          <FormControl component="fieldset">
            <FormLabel component="legend">男性・女性</FormLabel>
            <Controller
              name="gender"
              control={control}
              defaultValue="male"
              render={({ field }) => (
                <RadioGroup {...field}>
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="男性"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="女性"
                  />
                </RadioGroup>
              )}
            />
          </FormControl>
          <br />
          <br />
          <FormControl component="fieldset">
            <FormLabel component="legend">曜日</FormLabel>
            <Controller
              name="days"
              control={control}
              defaultValue={{
                sun: false,
                mon: false,
                tue: false,
                wed: false,
                thu: false,
                fri: false,
                sat: false,
              }}
              render={({ field }) => (
                <FormGroup>
                  {Object.keys(field.value).map((day) => (
                    <FormControlLabel
                      key={day}
                      control={
                        <Checkbox
                          checked={field.value[day as WeekDays]}
                          onChange={(e) =>
                            field.onChange({
                              ...field.value,
                              [day as WeekDays]: e.target.checked,
                            })
                          }
                        />
                      }
                      label={day.toUpperCase()}
                    />
                  ))}
                </FormGroup>
              )}
            />
          </FormControl>
          <br />
          <br />
          <FormControlLabel
            control={
              <Controller
                name="toggle"
                control={control}
                defaultValue={false}
                render={({ field }) => <Switch {...field} />}
              />
            }
            label="トグル"
          />
          <br />
          <br />
          <br />
          <button type="submit">送信</button>
        </Box>
      </form>
    </>
  );
};
