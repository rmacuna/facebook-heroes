import { FC } from "react";
import { createContext } from "react";

export const AuthContext = createContext({});

const AuthProvider: FC = ({ children }) => {
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
