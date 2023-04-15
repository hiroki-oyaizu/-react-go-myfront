import React from "react";
import Select from "react-select";

import { Control, Controller } from "react-hook-form";
import { CategoryOptions, OptionType } from "../../utils/Utils";
import { ListingType } from "../../types/Listing/ListingType";

type ListingKeys = keyof ListingType;

type Props = {
  control: Control<ListingType>;
  options: OptionType[];
  name: ListingKeys;
};

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    width: 200,
  }),
};

export const SelectComponents = ({ control, options, name }: Props) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            styles={customStyles}
            onChange={(value) => field.onChange(value ? value.value : "")}
            value={CategoryOptions.find(
              (option) => option.value === field.value
            )}
          />
        )}
      />
    </>
  );
};
