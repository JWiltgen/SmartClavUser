import React, { createContext, useState } from "react";
import { LogBox } from "react-native";

export const AuthContext = createContext({});
LogBox.ignoreAllLogs();

export default function AuthProvider({ children }) {
  const [mode, setMode] = useState("user");
  const [signed, setSigned] = useState(false);

  function handleLogin() {
    setSigned(true);
  }

  function loginMode(mode) {
    setMode(mode);
  }

  return (
    <AuthContext.Provider value={{ loginMode, mode, handleLogin, signed }}>
      {children}
    </AuthContext.Provider>
  );
}
