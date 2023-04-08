// AuthContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  currentUser: any; // 適切な型に変更してください。
  login: (email: string, password: string) => Promise<void>; // 追加
  // 他のプロパティがあればここに追加
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<any>(null); // 適切な型に変更してください。

  // ログイン処理を実装
  const login = async (email: string, password: string) => {
    // ログイン処理を実装してください。
    // 例: `setCurrentUser`を呼び出すなど
  };

  // ログアウトの処理をここで行う

  const value = { currentUser, login }; // login関数を追加

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
