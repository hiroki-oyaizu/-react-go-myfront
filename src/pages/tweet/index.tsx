import React from "react";
import { IndexTweetComponents } from "../../components/tweet/IndexTweetComponents";
import { useTweetHooks } from "../../hooks/tweet/TweetHooks";
import { Header } from "../../components/layout/Header";

export const IndexTweet = () => {
  const { allTweets, GetAllTweets } = useTweetHooks();
  return (
    <>
      <Header />
      <IndexTweetComponents allTweets={allTweets} GetAllTweets={GetAllTweets} />
    </>
  );
};
