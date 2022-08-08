import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";

export default function MenuAdmin() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Escolha a opção desejada</Text>
      <View style={styles.space} />
      <View style={styles.space} />
      <TouchableOpacity
        style={styles.button}
        title="Adicionar Grupos"
        onPress={() => navigation.navigate("AddGroups")}
      >
        <Text style={styles.buttontext}> Adicionar Grupos </Text>
      </TouchableOpacity>
      <View style={styles.space} />
      <TouchableOpacity
        style={styles.button}
        title="Adicionar Usuário"
        onPress={() => navigation.navigate("AddUsers")}
      >
        <Text style={styles.buttontext}> Adicionar Usuário </Text>
      </TouchableOpacity>
      <View style={styles.space} />
      <TouchableOpacity
        style={styles.button}
        title="Adicionar Chaves"
        onPress={() => navigation.navigate("AddKeys")}
      >
        <Text style={styles.buttontext}> Adicionar Chaves </Text>
      </TouchableOpacity>
    </View>
  );
}
