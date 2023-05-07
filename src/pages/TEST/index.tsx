import React from "react";
// 7d819236d43e8
export const TweetIndex = () => {
  const data = [
    {
      id: 1,
      name: "Aスーパー",
      address: "東京都、、、、",
      category: [
        {
          categoryId: 1,
          name: "食品",
          list: [
            { 食品id: 1, 食品name: "カレー" },
            { 食品id: 2, 食品name: "ケーキ" },
          ],
        },
        {
          categoryId: 2,
          name: "衣料品",
          list: [
            { 衣料品id: 1, 衣料品name: "上着" },
            { 衣料品id: 2, 衣料品name: "下着" },
          ],
        },
        {
          categoryId: 3,
          name: "家電",
          list: [
            { 家電id: 1, 家電name: "ドライヤー" },
            { 家電id: 2, 家電name: "洗濯機" },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Bスーパー",
      address: "大阪、、、、",
      category: [
        {
          categoryId: 1,
          name: "食品",
          list: [
            { 食品id: 1, 食品name: "カレー" },
            { 食品id: 2, 食品name: "ケーキ" },
          ],
        },
        {
          categoryId: 2,
          name: "衣料品",
          list: [
            { 衣料品id: 1, 衣料品name: "上着" },
            { 衣料品id: 2, 衣料品name: "下着" },
          ],
        },
        {
          categoryId: 3,
          name: "家電",
          list: [
            { 家電id: 1, 家電name: "ドライヤー" },
            { 家電id: 2, 家電name: "洗濯機" },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <h1>TEST</h1>
    </>
  );
};
