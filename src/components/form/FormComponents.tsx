import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
type Props = {
  control: any;
  name: string;
  label?: string;
  rows?: number;
  multiline?: boolean;
  placeholder?: string;
  width?: string;
  borderColor?: string;
  borderWidth?: string;
  type?: string;
  onChange?: (event: any) => void;
};

export const FormComponents = ({
  control,
  name,
  label,
  rows,
  multiline,
  placeholder,
  width,
  borderColor,
  borderWidth = "1px",
  type = "text",
  onChange,
}: Props) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            label={label}
            placeholder={placeholder}
            variant="outlined"
            type={type}
            value={field.value}
            onBlur={field.onBlur}
            ref={field.ref}
            multiline={multiline}
            onChange={(event) => {
              if (onChange) {
                onChange(event);
              }
              field.onChange(event);
            }}
            rows={rows}
            sx={{
              width: width,
              "& .MuiOutlinedInput-root": {
                borderColor: borderColor,
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: borderColor,
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: borderColor,
                  borderWidth: borderWidth,
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: borderColor,
                },
              },
            }}
          />
        )}
      />
    </>
  );
};
