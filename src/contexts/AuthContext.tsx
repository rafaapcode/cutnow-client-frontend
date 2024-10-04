import React, { createContext, useCallback, useState } from "react";

interface IAuthContextValue {
  signedIn: boolean;
  login: () => void;
  logout: () => void;
  user: {
    email: string;
    nome: string;
  };
}

export const AuthContext = createContext({} as IAuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState(false);

  const logIn = useCallback(() => {
    setSignedIn(true);
  }, []);

  const logOut = useCallback(() => {
    setSignedIn(false);
  }, []);

  const value: IAuthContextValue = {
    signedIn,
    login: logIn,
    logout: logOut,
    user: { email: "", nome: "" }
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
