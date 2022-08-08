import React, { useState } from "react";
import { Text ,View, FlatList, TextInput, TouchableOpacity } from "react-native";
import { Search28Regular } from "@fluentui/react-icons/lib/sizedIcons/chunk-16";

import FontAweseome from "react-native-vector-icons/FontAwesome5";
import ListaChave from "../../components/ListaChave";
import { styles } from "./styles";

export default function Chave() {
  const [searchFor, setSearch] = useState("");

  const [chaves, setChave] = useState([
    { id: "1", nome: "Quadra", status: true, number:"B2-06", },
    { id: "2", nome: "Sala 1", status: false,    number:"F0-04", who: "Professora Adriana" },
    { id: "3", nome: "Sala 2", status: true, number:"B0-03", },
    { id: "4", nome: "Laboratório de informática", status: true, number:"A0-33", },
    { id: "5", nome: "Secretaria", status: false, number:"B4-13", who: "Aluna Ana Clara" },
    { id: "6", nome: "Sala 5", status: false, number:"AA-01", who:"Aluna Roberta" },
  ]);

  return (
    <View style={styles.container}>
      <Text style={[{ fontSize:24, fontWeight:"bold", alignItems:"flex-start", paddingLeft:10, paddingTop:10 }]}>
        Todas as chaves
      </Text>
      <View style={styles.searchArea} >
        <View style={styles.inputArea}>
        <TouchableOpacity style={{ paddingRight: 8, }}>
          <Search28Regular color="#1414"/>
        </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar ..."
            onChangeText={(busca) => setSearch(busca)}
          />
        </View>
      </View>

      <View>
        
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        vertical={true}
        keyExtractor={(item) => item.id}
        data={chaves}
        renderItem={({ item }) => (
        <ListaChave data={item} />
        )}
      />
    </View>
  );
}
