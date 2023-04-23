// Home.tsx
import React from "react";
import { useAuth } from "../../contexts/AuthContext";

export const Home = () => {
  const { firstName, lastName } = useAuth();

  return (
    <div>
      <h1>トップページ</h1>
      {firstName && lastName ? (
        <h2>
          ようこそ {firstName} {lastName} さん！
        </h2>
      ) : (
        <h2>ようこそゲストさん！</h2>
      )}
    </div>
  );
};
