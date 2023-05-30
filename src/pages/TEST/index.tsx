import React from "react";
// 7d819236d43e8
export const TweetIndex = () => {
  const data = [
    {
      teamId: 1,
      teamName: "ライオンズ",
      founded: 1908,
      active: true,
      playerList: [
        {
          playerId: 10,
          playerName: "Tom Smith",
          joined: 2018,
          Position: "Forward",
        },
        {
          playerId: 20,
          playerName: "John Doe",
          joined: 2020,
          Position: "Midfielder",
        },
        {
          playerId: 30,
          playerName: "Jane Davis",
          joined: 2019,
          Position: "Defender",
        },
        {
          playerId: 40,
          playerName: "Emily Clark",
          joined: 2021,
          Position: "Goalkeeper",
        },
        {
          playerId: 50,
          playerName: "Robert Johnson",
          joined: 2020,
          Position: "Defender",
        },
      ],
    },
    {
      teamId: 2,
      teamName: "タイガース",
      founded: 1915,
      active: true,
      playerList: [],
    },
  ];
  return (
    <>
      <h1>TEST</h1>
    </>
  );
};
