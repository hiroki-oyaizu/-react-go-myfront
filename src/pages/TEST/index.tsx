import React from "react";
// 7d819236d43e8
export const TweetIndex = () => {
  const data = [
    {
      id: 1,
      title: "test",
      year: 2021,
      author: "A監督",
      出演者: [
        { id: 1, name: "take" },
        { id: 2, name2: "take2" },
      ],
      評価: { IMDb: 7.8, RottenTomatoes: 7.8 },
    },
    {
      id: 2,
      title: "test",
      year: 2027,
      author: "B監督",
      出演者: [
        { id: 1, name: "takeshi" },
        { id: 2, name2: "takeshi2" },
      ],
      評価: { IMDb: 9.8, RottenTomatoes: 7.8 },
    },
  ];
  return (
    <>
      <h1>TEST</h1>
    </>
  );
};
