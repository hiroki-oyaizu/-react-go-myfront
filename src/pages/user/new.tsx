import React from "react";
import { NewUserComponents } from "../../components/user/NewUserComponents";
import { useUserHooks } from "../../hooks/user/UserHooks";

export const NewUser = () => {
  const { onSubmit, previewImage, handleImageChange } = useUserHooks();
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
