import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Key24Regular,Star20Regular, Star20Filled,  } from "@fluentui/react-icons";
import { ChevronRight24Regular } from "@fluentui/react-icons";
export default function ListaChave({ data }) {
  const navigation = useNavigation();

  function mostraOpcoes() {
    navigation.navigate("InformacoesChave", {
      nome: data.nome,
      status: data.status,
      number: data.number,
      who: data.who,
    });
  }

  return (
    //!data.status ?
    <View style={[{backgroundColor:"#F7F2F9"}]} >
      <TouchableOpacity onPress={mostraOpcoes}>
        <View style={styles.container}>
          <View style={[{
            alignItems:"flex-start",
            paddingTop:8,
          }]} >
            <Key24Regular/>
          </View>
          <View style={styles.areaTexto}>
            <Text style={styles.textoTitulo}>
              {data.nome}
              <TouchableOpacity style={[{ paddingLeft: 10 }]}>
                <Star20Regular/>
              </TouchableOpacity> 
            </Text>
            <Text 
              style={[{ 
                backgroundColor: data.status ? "#00FF47" : "#B3261E",
                fontWeight:"bold",
                color: data.status ? "black" : "white",
                alignSelf:"flex-start",
                borderWidth:2,
                borderColor: data.status ? "#00FF47" : "#B3261E",
                borderRadius:4,
              }]}
            >
              {data.status ? "Disponível" : "Indisponível"}
            </Text>
            <Text style={[{ paddingTop:2, }]} >
              {data.number}
            </Text>
            <Text>
              {data.status ? "Disponível para retirada" : "Em posse de"} {data.who}
            </Text>
          </View>
          <View style={[{alignItems:"center", justifyContent:"center"}]}>
            <TouchableOpacity style={[{backgroundColor:"#EADDFF", borderRadius:100, borderWidth:6, borderColor:"#EADDFF"}]}>
              <ChevronRight24Regular color="#21005D"/>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
