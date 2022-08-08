import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import firebase from "../../services/firebaseConnection";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../MenuAdmin/styles";

export default function AddGroup() {
  const [groupName, setGroupName] = useState("");
  const navigation = useNavigation();

  async function handleAddGroup() {
    if (groupName === "") return;

    const key = await firebase.database().ref("grupos").push().key;
    try {
      await firebase.database().ref("grupos").child(key).set({
        nome: groupName,
      });
      alert(`O grupo foi cadastrado foi sucesso!`);
    } catch (error) {
      alert("Ops, ocorreu um erro ao cadastrar o grupo!");
    }

    Keyboard.dismiss();
    setGroupName("");
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Grupo:"
        value={groupName}
        onChangeText={(text) => setGroupName(text)}
      />

      <View style={styles.buttonsArea}>
        <TouchableOpacity
          onPress={handleAddGroup}
          style={[styles.button, styles.addButton]}
        >
          <Text style={styles.buttontext}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Menu")}
          style={[styles.button, styles.addButton]}
        >
          <Text style={styles.buttontext}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
