import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  login: (
    mail: string,
    password: string,
    token: string,
    userId: number,
    firstName: string,
    lastName: string
  ) => void;
  logout: () => void;
  userId: number;
  firstName: string;
  lastName: string;
};

type AuthContextProviderProps = {
  children: ReactNode;
};
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userId, setUserId] = useState<number>(0);

  const login = (
    mail: string,
    password: string,
    token: string,
    userId: number,
    firstName: string,
    lastName: string
  ) => {
    console.log("Logging in with userId:", userId);
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId.toString());
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    setIsLoggedIn(true);
    setUserId(userId);
    setFirstName(firstName);
    setLastName(lastName);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    setIsLoggedIn(false);
    setFirstName("");
    setLastName("");
  };

  useEffect(() => {
    // localStorageからfirstName, lastName, userIdを取得し、状態を更新する
    setFirstName(localStorage.getItem("firstName") || "");
    setLastName(localStorage.getItem("lastName") || "");
    setUserId(Number(localStorage.getItem("userId")) || 0); // ← userIdの状態を更新
    setIsLoggedIn(localStorage.getItem("token") !== null);
  }, [isLoggedIn]); // ← isLoggedInを依存関係に追加

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        userId,
        login,
        logout,
        firstName,
        lastName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
