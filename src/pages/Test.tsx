import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type TweetType = {
  id: number;
  title: string;
  tweet: string;
};

export const Test = () => {
  const [allTweet, setAllTweet] = useState<TweetType[]>([]);

  useEffect(() => {
    // 新しくヘッダーを作成しContent-Typeを追加（このファイルは、こんな種類のファイルですよ）
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    const requestOptions = {
      method: "GET",
      headers: headers,
    };

    // 取得のリクエスト
    fetch(`http://localhost:8080/tweets`, requestOptions)
      // 取得しjsonで渡す
      .then((response) => response.json())
      // データー取得
      .then((data: TweetType[]) => {
        setAllTweet(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>testo</h1>
      {allTweet.map((tweet) => {
        return (
          <div style={{ textAlign: "center", border: "1px solid red" }}>
            <p>タイトル内容</p>
            <Box style={{ color: "red" }}>{tweet.title}</Box>
            <p>ツイート内容</p>
            <Box style={{ color: "blue" }}>{tweet.tweet}</Box>
            <p>ID内容</p>
            <Box style={{ color: "green" }}>{tweet.id}</Box>

            <br />
          </div>
        );
      })}
    </>
  );
};
