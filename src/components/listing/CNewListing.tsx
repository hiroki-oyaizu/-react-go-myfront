import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { ListingType } from "../../types/Listing/ListingType";
import { Controller, useForm } from "react-hook-form";
import { FormComponents } from "../form/FormComponents";
import Select from "react-select";
import { CategoryOptions, ConditionOptions } from "../../utils/Utils";
import { SelectComponents } from "../form/SelectComponents";

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    width: 200,
  }),
};

export const CNewListing = () => {
  const { control, handleSubmit } = useForm<ListingType>({
    defaultValues: {
      id: 0,
      title: "",
      description: "",
      price: 0,
      image: "",
      user_id: 0,
      category: "",
      condition: "",
    },
  });

  const onSubmit = (data: ListingType) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ height: "100vh" }}>
          <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
            <Box sx={{ width: "60%", borderRight: "1px solid #ddd" }}>
              <Box sx={{ textAlign: "center" }}>画像</Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <input type="file" />
              </Box>
            </Box>
            <Box
              sx={{
                width: "40%",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#EEEEEE",
              }}
            >
              <Box
                sx={{
                  border: "1px solid red",
                  width: "90%",
                  borderRadius: 8,
                  mt: 7,
                  backgroundColor: "white",
                  ml: 5,
                }}
              >
                <Box sx={{ textAlign: "center", mt: 8 }}>商品情報入力</Box>
                <Box sx={{ margin: "20px 0" }}>
                  <Typography variant="h6">商品名</Typography>
                  <FormComponents
                    control={control}
                    name={"title"}
                    label="商品名"
                  />
                </Box>
                <Box
                  sx={{
                    margin: "20px 0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">商品の説明</Typography>
                  <FormComponents
                    control={control}
                    name={"title"}
                    label="商品名"
                  />
                </Box>
                <Box
                  sx={{
                    margin: "20px 0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">カテゴリ</Typography>
                  <SelectComponents
                    control={control}
                    options={CategoryOptions}
                    name={"category"}
                  />
                  <Controller
                    name="category"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={CategoryOptions}
                        styles={customStyles}
                        onChange={(value) =>
                          field.onChange(value ? value.value : "")
                        }
                        value={CategoryOptions.find(
                          (option) => option.value === field.value
                        )}
                      />
                    )}
                  />
                </Box>

                <Box
                  sx={{
                    margin: "20px 0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6">商品の状態</Typography>
                  <Controller
                    name="condition"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={ConditionOptions}
                        styles={customStyles}
                        onChange={(value) =>
                          field.onChange(value ? value.value : "")
                        }
                        value={CategoryOptions.find(
                          (option) => option.value === field.value
                        )}
                      />
                    )}
                  />
                </Box>
                <Box sx={{ margin: "20px 0" }}>
                  <Typography variant="h6">販売価格</Typography>
                  <FormComponents
                    control={control}
                    name={"price"}
                    label="値段"
                  />
                </Box>
                <Box sx={{ margin: "20px 0" }}>
                  <Button variant="contained" color="primary" type="submit">
                    出品する
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </form>
    </>
  );
};
