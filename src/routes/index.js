import React, { useContext } from "react";
import { AuthContext } from "../contexts/auth";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import AdminRoutes from "./admin.routes";

export default function Routes() {
  const { signed, mode } = useContext(AuthContext);

  if (signed) {
    if (mode === "admin") {
      return <AdminRoutes />;
    } else if (mode === "user") {
      return <AppRoutes />;
    }
  } else {
    return <AuthRoutes />;
  }
}
