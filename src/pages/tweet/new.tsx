import React from "react";
import { NewTweetComponents } from "../../components/tweet/NewTweetComponents";
import { TweetHeader } from "../../components/layout/TweetHeader";

export const NewTweet = () => {
  return (
    <>
      <TweetHeader />
      <NewTweetComponents />
    </>
  );
};
