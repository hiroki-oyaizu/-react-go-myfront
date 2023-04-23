import { TweetType } from "../../types/tweet/TweetType";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const TweetHooks = () => {
  const navigate = useNavigate();

  const CreateTweet = async (data: TweetType) => {
    axios.post("http://localhost:8080/tweets", data);
    navigate("/");
  };
  return { CreateTweet };
};
