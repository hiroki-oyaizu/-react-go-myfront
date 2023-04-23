import React from "react";
import Select from "react-select";

import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { OptionType } from "../../utils/Utils";

type Props<T extends FieldValues> = {
  control: Control<T>;
  options: OptionType[];
  name: keyof T | string;
  width?: number;
};

export const customStyles = (width: number) => ({
  control: (provided: any) => ({
    ...provided,
    width: width,
  }),
});

export const SelectComponents = <T extends FieldValues>({
  control,
  options,
  name,
  width = 200,
}: Props<T>) => {
  return (
    <>
      <Controller
        name={name as Path<T>}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            styles={customStyles(width)}
            onChange={(value) => field.onChange(value ? value.value : "")}
            value={
              field.value
                ? options.find((option) => option.value === field.value)
                : options[0]
            }
          />
        )}
      />
    </>
  );
};
