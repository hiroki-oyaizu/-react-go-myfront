import { Box } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

type ArticleType = {
  id: number;
  title: string;
};
export const ArticleIndex = () => {
  const [allArticle, setAllArticle] = useState<ArticleType[]>([]);

  const fetch = async () => {
    const res = await axios.get<ArticleType[]>("http://localhost:8080/article");
    try {
      if (res.status === 200 && res.data) {
        setAllArticle(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <h1>記事一覧ページ</h1>
      <Box sx={{ textAlign: "center" }}>
        {allArticle.map((artcle: ArticleType, index) => {
          return (
            <Box key={index}>
              <p>id番号</p>
              {artcle.id}
              <p>タイトル</p>
              {artcle.title}
            </Box>
          );
        })}
      </Box>
    </div>
  );
};
