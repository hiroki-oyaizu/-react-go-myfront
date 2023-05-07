import React from "react";
import { NewUserComponents } from "../../components/user/NewUserComponents";
import { useNewUser } from "../../hooks/user/UserHooks";

export const NewUser = () => {
  const { onSubmit, previewImage, handleImageChange } = useNewUser();
  return (
    <>
      <NewUserComponents
        onSubmit={onSubmit}
        previewImage={previewImage}
        handleImageChange={handleImageChange}
      />
    </>
  );
};
