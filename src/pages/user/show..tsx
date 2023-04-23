import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AllUserType } from "../../types/user/UserType";
import { Button } from "@mui/material";

export const ShowUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<AllUserType>();

  const deleteUser = async () => {
    await axios.delete(`http://localhost:8080/users/${id}`);
    navigate("/");
  };

  const goToEditUserPage = () => {
    navigate(`/users/edit/${id}`);
  };

  const fetchUser = async () => {
    const res = await axios.get<AllUserType>(
      `http://localhost:8080/users/${id}`
    );
    try {
      if (res.status === 200 && res.data) {
        setUser(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(id);

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <h3>{`${id}詳細`}</h3>
      {user?.firstName}
      {user?.lastName}
      <Button onClick={deleteUser}>削除</Button>
      <Button onClick={goToEditUserPage}>編集ページ</Button>
    </>
  );
};
