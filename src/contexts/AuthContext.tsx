import React, { createContext, useCallback, useState } from "react";
import { storageKeys } from "../config/storageKeys";

interface IAuthContextValue {
  signedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
  user: {
    email: string;
    nome: string;
  };
}

export const AuthContext = createContext({} as IAuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState(() => !!localStorage.getItem(storageKeys.accessToken));

  const logIn = useCallback((token: string) => {
    localStorage.setItem(storageKeys.accessToken, token);
    setSignedIn(true);
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem(storageKeys.accessToken);
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
