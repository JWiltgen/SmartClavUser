import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "../../services/firebaseConnection";
import { styles } from "../MenuAdmin/styles";
import MultiSelect from "../../components/MultipleSelect";

export default function AddKey() {
  const [code, setCode] = useState("");
  const [room, setRoom] = useState("");
  const [groups, setGroups] = useState([]);

  const [selectedGroups, setSelectedGroups] = useState([]);
  const [loading, setLoading] = useState();
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

  async function handleAddKey() {
    if (code === "" || room === "" || selectedGroups.length === 0) {
      alert("Preencha todos os campos!");
      return;
    }

    let ids = [];
    selectedGroups.map((group) => {
      ids.push(group.id);
    });

    const key = await firebase.database().ref("chaves").push().key;
    try {
      await firebase.database().ref("chaves").child(key).set({
        codigo: code,
        sala: room,
        grupos: ids,
      });
      alert(`Chave cadastrado com sucesso!`);
    } catch (error) {
      alert("Ops, ocorreu um erro ao cadastrar a chave!");
    }

    Keyboard.dismiss();
    setCode("");
    setRoom("");
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
            placeholder="Código da chave"
            onChangeText={(text) => setCode(text)}
            value={code}
          />
          <TextInput
            style={styles.input}
            placeholder="Nome da sala"
            onChangeText={(text) => setRoom(text)}
            value={room}
          />
          <MultiSelect
            options={groups}
            selected={selectedGroups}
            setSelected={setSelectedGroups}
          />
          <View style={styles.buttonsArea}>
            <TouchableOpacity
              onPress={handleAddKey}
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
