import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface AuthContextProps {
  children: ReactNode;
}

interface AuthContextValue {
  authUser;
  setAuthUser;
}

export const AuthContext = createContext<AuthContextValue>(null);

export default function AuthContextProvider({ children }: AuthContextProps) {
  const [authUser, setAuthUser] = useState(null);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}
