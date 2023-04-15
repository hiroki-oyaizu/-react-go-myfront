import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
type Props = {
  control: any;
  name: string;
  label: string;
};

export const FormComponents = ({ control, name, label }: Props) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField label="label" variant="outlined" {...field} />
        )}
      />
    </>
  );
};
