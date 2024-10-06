import React, { createContext, useCallback, useState } from "react";
import { storageKeys } from "../config/storageKeys";

interface IAuthContextValue {
  signedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
  setuser: (user: {email: string, nome: string, id: string, avatar: string;}) => void;
  user: {
    id: string;
    email: string;
    nome: string;
    avatar: string;
  };
}

export const AuthContext = createContext({} as IAuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const storagedUser = localStorage.getItem(storageKeys.user) ? JSON.parse(localStorage.getItem(storageKeys.user)!) :  { email: "", nome: "", id: "", avatar: ""};
  const [signedIn, setSignedIn] = useState(() => !!localStorage.getItem(storageKeys.accessToken));
  const [user, setUser] = useState(storagedUser);

  const logIn = useCallback((token: string) => {
    localStorage.setItem(storageKeys.accessToken, token);
    setSignedIn(true);
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem(storageKeys.accessToken);
    localStorage.removeItem(storageKeys.user);
    setSignedIn(false);
  }, []);

  const setuser = useCallback((user: {email: string, nome: string, id: string, avatar: string}) => {
    setUser(user);
    localStorage.setItem(storageKeys.user, JSON.stringify(user));
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
