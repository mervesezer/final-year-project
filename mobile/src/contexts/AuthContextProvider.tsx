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
    authUser: User;
    setAuthUser: Dispatch<SetStateAction<User>>;
  }
  
  export const AuthContext = createContext<AuthContextValue>(null);
  
  export default function AuthContextProvider({ children }: AuthContextProps) {
    const [authUser, setAuthUser] = useState<User>(null);
  
    return (
      <AuthContext.Provider value={{ authUser, setAuthUser }}>
        {children}
      </AuthContext.Provider>
    );
  }
  