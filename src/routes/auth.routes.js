import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/Login";
const AuthStack = createStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
