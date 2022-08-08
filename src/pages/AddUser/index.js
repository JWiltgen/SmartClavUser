import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../services/firebaseConnection";
import { styles } from "../MenuAdmin/styles";
import MultiSelect from "../../components/MultipleSelect";

export default function AddUser() {
  const [groups, setGroups] = useState([]);
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [loading, setLoading] = useState();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [registration, setRegistration] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    setGroups([]);
    getGroups();
  }, []);

  async function getGroups() {
    setLoading(true);
    try {
      await firebase
        .database()
        .ref("grupos")
        .once("value", (snapshot) => {
          snapshot?.forEach((childItem) => {
            let data = {
              id: childItem.key,
              item: childItem.val().nome,
            };
            setGroups((oldGroups) => [...oldGroups, data]);
          });
        });
    } catch {
      alert("Ops, ocorreu um erro ao carregar os grupos.");
    } finally {
      setLoading(false);
    }
  }

  async function handleAddUser() {
    if (
      name === "" ||
      registration === "" ||
      email === "" ||
      selectedGroups.length === 0
    ) {
      alert("Preencha todos os campos!");
      return;
    }

    let ids = [];
    selectedGroups.map((group) => {
      ids.push(group.id);
    });

    const key = await firebase.database().ref("usuarios").push().key;
    try {
      await firebase.database().ref("usuarios").child(key).set({
        nome: name,
        senha: "mudar123",
        email: email,
        matricula: registration,
        grupos: ids,
      });
      alert(`O usuário foi cadastrado com sucesso!`);
    } catch (error) {
      alert("Ops, ocorreu um erro ao cadastrar o usuário!");
    }

    Keyboard.dismiss();
    setName("");
    setRegistration("");
    setEmail("");
    setSelectedGroups([]);
  }

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#252338" />
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Matrícula"
            keyboardType="numeric"
            value={registration}
            onChangeText={(text) => setRegistration(text)}
          />
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="E-mail"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <MultiSelect
            options={groups}
            selected={selectedGroups}
            setSelected={setSelectedGroups}
          />
          <View style={styles.buttonsArea}>
            <TouchableOpacity
              onPress={handleAddUser}
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
        </>
      )}
    </SafeAreaView>
  );
}
