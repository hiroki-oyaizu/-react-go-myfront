import { Box, Button, TextField } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
type InputForm = {
  name: string;
  age: string;
  language: {
    firstLang: string;
    secodLang: string;
  }[];
  favlit: string;
};
export const ArticleNew = () => {
  const { control, handleSubmit } = useForm<InputForm>({
    defaultValues: {
      name: "",
      age: "",
      language: [],
    },
  });

  const handleSubmitCheck = (data: InputForm) => {
    console.log(data);
  };

  const [text, setText] = useState("");
  return (
    <>
      <Button onClick={handleSubmit(handleSubmitCheck)}>確認</Button>
      <Box sx={{ mb: 3 }}>
        <Controller
          control={control}
          name="name"
          render={({
            field: { onChange, onBlur, value, ref },
            formState,
            fieldState,
          }) => (
            <>
              <TextField
                onChange={onChange} // send value to hook form
                onBlur={onBlur} // notify when input is touched
                value={value} // return updated value
                ref={ref} // set ref for focus management
                variant="outlined"
              />
            </>
          )}
        />
      </Box>
      <Box style={{ marginTop: "30px" }}>
        <Controller
          control={control}
          name={"age"}
          defaultValue={"3"}
          // rules={rules}
          render={({ field, fieldState: { error } }) => {
            const handleChange = (
              event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              field.onChange(event.target.value);
              const newValue = field.value;
              setText(newValue);
              // setText(event.target.value);
              // if (onChange) {
              //   onChange(event);
              // }
            };
            return (
              <>
                <TextField
                  value={field.value || ""}
                  name={field.name}
                  variant="outlined"
                  onChange={handleChange}
                  inputProps={{
                    maxLength: 30,
                    style: {
                      fontSize: "14px",
                      height: 20,
                    },
                  }}
                  // multiline={multiline}
                  // rows={rows}
                />
              </>
            );
          }}
        />
      </Box>
      <Box>{text.length}</Box>
    </>
  );
};
