import { useEffect, useState } from "react";

interface UserType {
  id: number;
  name: string;
  age: number;
}

export const UserIndex = (): JSX.Element => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const header = new Headers();
    header.append("Content-Type", "application/json");
    const requestOptions = {
      method: "GET",
      headers: header,
    };

    fetch(`http://localhost:8080/users`, requestOptions)
      .then((res) => res.json())
      .then((data: UserType[]) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>ユーザー一覧</h1>
      {users.map((user: UserType) => {
        return (
          <p>
            {user.name}
            <br />
            {user.age}
            <br />
            {user.id}
          </p>
        );
      })}
    </>
  );
};

// この学びの感想と今後どう生かしていけるか感想を項目を分けて書いてください。

// a1 = 10
// a2 = 20
