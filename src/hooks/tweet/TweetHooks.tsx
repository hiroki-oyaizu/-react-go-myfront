import { TweetType } from "../../types/tweet/TweetType";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useTweetHooks = () => {
  const navigate = useNavigate();
  const [allTweets, setAllTweets] = useState<TweetType[]>([]);
  const [onlyTweet, setOnlyTweet] = useState<TweetType>();
  const GetAllTweets = async () => {
    const res = await axios.get<TweetType[]>("http://localhost:8080/tweet");
    try {
      if (res.status === 200 && res.data) {
        setAllTweets(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const CreateTweet = async (data: TweetType) => {
    axios.post("http://localhost:8080/tweets", data);
    navigate("/");
  };

  const fetchOnlyTweet = async (id: number) => {
    const res = await axios.get<TweetType>(`http://localhost:8080/tweet/${id}`);
    try {
      if (res.status === 200 && res.data) {
        setOnlyTweet(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { allTweets, GetAllTweets, CreateTweet, fetchOnlyTweet, onlyTweet };
};
