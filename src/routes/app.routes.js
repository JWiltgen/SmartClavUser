import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import { Home24Regular, Key24Filled, } from "@fluentui/react-icons/lib/sizedIcons/chunk-11";
import { Folder24Regular } from "@fluentui/react-icons/lib/sizedIcons/chunk-9";
import { View, Text, TouchableOpacity, FlatList, } from "react-native";
import { Star24Regular } from "@fluentui/react-icons";
import { MoreVertical24Regular } from "@fluentui/react-icons";

import Reserva from "../pages/Reserva";
import Chave from "../pages/Chave";
import Chat from "../pages/Chat";
import Header from "../components/Header";
import InformacoesChave from "../pages/InformacoesChave";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerRight: () => <Header />,
        headerTitleAlign: "Center",
        tabBarActiveTintColor: "#21005D",
        tabBarInactiveTintColor: "#9A82DB",
        tabBarStyle: {
          backgroundColor: "#EADDFF",
        },
        headerStyle: {
          backgroundColor: "#EADDFF",},
        
      })}
    >
      <Tab.Screen
        name="Reservas"
        component={Reserva}
        options={{
          tabBarIcon: ({ size, color }) => (
            <View style={[{ flexDirection:"column", flex: 1, justifyContent:"center" }]}>
               <Home24Regular color={color}/>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chaves"
        component={Chave}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Key24Filled color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="Histórico"
        component={Chat}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Folder24Regular color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{
          headerShown: false,
          title: " ",
        }}
      />
      <Stack.Screen
        name="InformacoesChave"
        component={InformacoesChave}
        options={{
          headerRight: () => (
            <View style={[{ flexDirection:"row", justifyContent:"flex-end", }]}>
              <TouchableOpacity style={[{ paddingRight: 25, }]}>
                <Star24Regular />
              </TouchableOpacity>  
              <TouchableOpacity style={[{ paddingRight: 25, }]}>
                <MoreVertical24Regular/>
              </TouchableOpacity>  
            </View>
        ),
          title: " ",
          headerStyle: {
            backgroundColor: "#EADDFF",
          },
        }}
      />
    </Stack.Navigator>
  );
}
