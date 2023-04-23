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
    firstName: string,
    lastName: string
  ) => void;
  logout: () => void;
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

  const login = (
    mail: string,
    password: string,
    token: string,
    firstName: string,
    lastName: string
  ) => {
    localStorage.setItem("token", token);
    localStorage.setItem("firstName", firstName); // 保存
    localStorage.setItem("lastName", lastName); // 保存
    setIsLoggedIn(true);
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
    // localStorageからfirstName, lastNameを取得し、状態を更新する
    setFirstName(localStorage.getItem("firstName") || "");
    setLastName(localStorage.getItem("lastName") || "");
    setIsLoggedIn(localStorage.getItem("token") !== null);
  }, [isLoggedIn]); // ← isLoggedInを依存関係に追加

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
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
