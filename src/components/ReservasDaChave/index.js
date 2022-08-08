import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import { styles } from "./styles";
import { Person24Regular } from "@fluentui/react-icons";
import { ChevronDown24Regular } from "@fluentui/react-icons";

export default function ListaChave({ data }) {
  return (
    <View>
      <View style={styles.container}>
        <View style={[{ paddingTop:5, }]}>
          <Person24Regular/>
        </View>
        <View style={styles.areaTexto}>
          <Text style={styles.textoTitulo}>{data.nome}</Text>
          <Text style={styles.textoChave}>
            {data.inicio} -{" "}{data.fim}
          </Text>
        </View>
        <View style={[{alignItems:"center", paddingTop:10,}]}>
          <TouchableOpacity style={[{backgroundColor:"#EADDFF", borderRadius:100, borderWidth:6, borderColor:"#EADDFF"}]}>
            <ChevronDown24Regular color="#21005D"/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
