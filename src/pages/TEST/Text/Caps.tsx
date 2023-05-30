import React from "react";
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
type FormType = {
  textName: string;
  ageSelect: {
    ageYear: string;
    ageMonth: string;
    ageDay: string;
  };
  gender: "female" | "male" | "other";
  favorites: string[];
  selectAge: boolean;
  likeSports: {
    soccer: boolean;
    baseball: boolean;
  };
};
export const Caps = () => {
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<FormType>({
    defaultValues: {
      textName: "test",
      ageSelect: { ageYear: "1", ageMonth: "2", ageDay: "3" },
      gender: "female",
      favorites: [],
      selectAge: false,
      likeSports: { soccer: false, baseball: false },
    },
  });

  const onSubmit = (data: FormType) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="textName"
          render={({ field }) => (
            <TextField
              {...field}
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              style={{ width: "100px", marginTop: "50px" }}
            />
          )}
        />
        <Box sx={{ mt: 10 }}>
          <Controller
            control={control}
            name="ageSelect.ageYear"
            render={({ field }) => (
              <TextField
                {...field}
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                style={{ width: "100px" }}
              />
            )}
          />
          歳
          <Controller
            control={control}
            name="ageSelect.ageMonth"
            render={({ field }) => (
              <TextField
                {...field}
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            )}
          />
          ヶ月
          <Controller
            control={control}
            name="ageSelect.ageDay"
            render={({ field }) => (
              <TextField
                {...field}
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
            )}
          />
          日
        </Box>
        <Box>
          <FormControl>
            <FormLabel>性別</FormLabel>
            <Controller
              control={control}
              name="gender"
              render={({ field }) => (
                <RadioGroup {...field} name="radio-buttons-group">
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              )}
            />
          </FormControl>
        </Box>
        <Box>
          <FormGroup>
            <Controller
              control={control}
              name="favorites"
              render={({ field }) => (
                <>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={field.value.includes("ラーメン")}
                        onChange={(e) =>
                          e.target.checked
                            ? field.onChange([...field.value, "ラーメン"])
                            : field.onChange(
                                field.value.filter((fav) => fav !== "ラーメン")
                              )
                        }
                      />
                    }
                    label="ラーメン"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={field.value.includes("肉")}
                        onChange={(e) =>
                          e.target.checked
                            ? field.onChange([...field.value, "肉"])
                            : field.onChange(
                                field.value.filter((fav) => fav !== "肉")
                              )
                        }
                      />
                    }
                    label="肉"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={field.value.includes("ケーキ")}
                        onChange={(e) =>
                          e.target.checked
                            ? field.onChange([...field.value, "ケーキ"])
                            : field.onChange(
                                field.value.filter((fav) => fav !== "ケーキ")
                              )
                        }
                      />
                    }
                    label="ケーキ"
                  />
                </>
              )}
            />
            <p>好きなもの</p>
          </FormGroup>
          <FormControl>
            <FormLabel>年齢確認</FormLabel>
            <Controller
              control={control}
              name="selectAge"
              render={({ field }) => (
                <RadioGroup {...field} name="radio-buttons-group">
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="未成年"
                  />
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="成人"
                  />
                </RadioGroup>
              )}
            />
          </FormControl>
        </Box>
        <FormGroup>
          <Controller
            control={control}
            name="likeSports.soccer"
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                }
                label="Soccer"
              />
            )}
          />
          <Controller
            control={control}
            name="likeSports.baseball"
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                }
                label="Baseball"
              />
            )}
          />
        </FormGroup>

        <Button type="submit" disabled={!isDirty}>
          登録
        </Button>
      </form>
    </>
  );
};
