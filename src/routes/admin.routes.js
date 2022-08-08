import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MenuAdmin from "../pages/MenuAdmin";
import AddUser from "../pages/AddUser";
import AddGroup from "../pages/AddGroup";
import AddKey from "../pages/AddKey";

const Stack = createStackNavigator();

export default function AdminRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={MenuAdmin}
        options={{
          title: "Tela inicio",
          headerStyle: {
            backgroundColor: "#121212",
          },

          headerTintColor: "#fff",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="AddGroups"
        component={AddGroup}
        options={{
          title: "Adicionar Grupo",
          headerStyle: {
            backgroundColor: "#121212",
          },

          headerTintColor: "#fff",
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="AddUsers"
        component={AddUser}
        options={{
          title: "Adicionar Usuário",
          headerStyle: {
            backgroundColor: "#121212",
          },

          headerTintColor: "#fff",
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="AddKeys"
        component={AddKey}
        options={{
          title: "Adicionar Chave",
          headerStyle: {
            backgroundColor: "#121212",
          },

          headerTintColor: "#fff",
          headerShown: true,
        }}
      />

      {/* <Stack.Screen
        name="Sobre"
        component={Sobre}
        options={{
          title: "Pagina Sobre",
        }}
      /> */}
    </Stack.Navigator>
  );
}
