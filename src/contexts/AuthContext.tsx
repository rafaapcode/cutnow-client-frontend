import React, { createContext, useCallback, useState } from "react";
import { storageKeys } from "../config/storageKeys";

interface IAuthContextValue {
  signedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
  setuser: (user: {email: string, nome: string, id: string}) => void;
  user: {
    id: string;
    email: string;
    nome: string;
  };
}

export const AuthContext = createContext({} as IAuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState(() => !!localStorage.getItem(storageKeys.accessToken));
  const [user, setUser] = useState({ email: "", nome: "", id: ""});

  const logIn = useCallback((token: string) => {
    localStorage.setItem(storageKeys.accessToken, token);
    setSignedIn(true);
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem(storageKeys.accessToken);
    setSignedIn(false);
  }, []);

  const setuser = useCallback((user: {email: string, nome: string, id: string}) => {
    setUser(user);
  }, []);

  const value: IAuthContextValue = {
    signedIn,
    login: logIn,
    logout: logOut,
    user: user,
    setuser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
