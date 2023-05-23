import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AllUserType } from "../../types/user/UserType";
import { useState } from "react";

export const useUserHooks = () => {
  const navigate = useNavigate();

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const dataUrl = reader.result as string;
        setPreviewImage(dataUrl);
      };
      reader.readAsDataURL(file);
      setImageFile(file); // 画像ファイルを状態変数に保存
    } else {
      setPreviewImage(null);
      setImageFile(null); // 画像ファイルを状態変数に保存
    }
  };

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const onSubmit = async (data: AllUserType) => {
    const updateData: AllUserType = {
      ...data,
    };
    if (imageFile) {
      try {
        const base64Image = await toBase64(imageFile);
        updateData.profileImage = base64Image;
      } catch (error) {}
    }
    updateData.age = Number(data.age);
    updateData.birthDay.year = Number(data.birthDay.year);
    updateData.birthDay.month = Number(data.birthDay.month);
    updateData.birthDay.day = Number(data.birthDay.day);

    await axios.post(
      "http://localhost:8080/users",
      JSON.stringify(updateData),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    navigate("/");
  };

  return { previewImage, onSubmit, handleImageChange };
};
