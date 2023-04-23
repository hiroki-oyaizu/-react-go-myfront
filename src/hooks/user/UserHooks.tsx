import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AllUserType } from "../../types/user/UserType";

export const useNewUser = () => {
  const navigate = useNavigate();
  const onSubmit = async (data: AllUserType) => {
    data.age = Number(data.age);
    await axios.post("http://localhost:8080/users", JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  return { onSubmit };
};
