import { Box, Button, Input, InputLabel, Typography } from "@mui/material";
import React, { useState } from "react";
import { ListingType } from "../../types/Listing/ListingType";
import { useForm } from "react-hook-form";
import { FormComponents } from "../form/FormComponents";
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

  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const onSubmit = (data: ListingType) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ height: "100vh" }}>
          <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
            <Box sx={{ width: "60%", borderRight: "1px solid #ddd" }}>
              <Box
                sx={{
                  textAlign: "center",
                  mt: 8,
                  fontSize: 30,
                  fontWeight: 700,
                }}
              >
                商品画像
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                {previewImage && (
                  <Box sx={{ textAlign: "center", padding: "1rem" }}>
                    <img
                      src={previewImage}
                      alt="preview"
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  </Box>
                )}
                <InputLabel htmlFor="image-upload">画像を選択</InputLabel>
                <Input
                  id="image-upload"
                  type="file"
                  onChange={handleImageChange}
                  sx={{ display: "none" }}
                />
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
                    name={"description"}
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
                  <SelectComponents
                    control={control}
                    options={ConditionOptions}
                    name={"condition"}
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
