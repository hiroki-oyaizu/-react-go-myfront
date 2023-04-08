import { Box } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export type AllUserType = {
  id: number;
  firstNane: string;
  lastNane: string;
  age: number;
  mail: string;
  password: string;
};

export const IndexUser = () => {
  const [allUsers, setAllUsers] = useState<AllUserType[]>([]);

  const fetchAllUsers = async () => {
    const res = await axios.get("http://localhost:8080/users");
    try {
      if (res.status === 200 && res.data) {
        setAllUsers(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);
  return (
    <>
      <Box sx={{ textAlign: "cneter" }}>
        {allUsers.map((user: AllUserType, index) => {
          return (
            <>
              <Box
                sx={{
                  border: "1px solid blue",
                  borderBottom:
                    index !== allUsers.length - 1 && "1px solid blue",
                }}
              >
                <Box>{user.id}</Box>
                <Box>{user.firstNane}</Box>
                <Box>{user.lastNane}</Box>
                <Box sx={{ borderBottom: "1px solid red" }}>{user.age} </Box>
              </Box>
              <Link to={`/users/${user.id}`}>詳細</Link>
            </>
          );
        })}
        <Link to="/users/new">ユーザ新規登録</Link>
      </Box>
    </>
  );
};
