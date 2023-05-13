import React from "react";
// 7d819236d43e8
export const TweetIndex = () => {
  const data = [
    {
      id: 1,
      name: "鈴木一郎",
      telePhone: "090-5555-1111",
      mail: "test@yahoo.co.jp",
      flightList: [
        {
          flightName: "A空港",
          flightNumber: 111,
          start: "大阪",
          end: "東京",
          startDate: "2021/10/10",
          endDate: "2021/10/11",
        },
        {
          flightName: "B空港",
          flightNumber: 211,
          start: "愛知",
          end: "東京",
          startDate: "2021/10/10",
          endDate: "2021/10/11",
        },
      ],
      hotelList: [
        {
          hotelName: "ホテルA",
          hotelType: "sweet",
          checkIN: "2021/10/10",
          checkOut: "2021/10/11",
        },
        {
          hotelName: "ホテルB",
          hotelType: "normal",
          checkIN: "2021/10/13",
          checkOut: "2021/10/18",
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
