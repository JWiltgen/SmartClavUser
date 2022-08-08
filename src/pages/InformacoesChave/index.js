import React, { useState, } from "react";
import { View, Text, TouchableOpacity, FlatList, } from "react-native";
import { styles } from "./styles";
import ReservasDaChave from "../../components/ReservasDaChave";
import { Star24Regular } from "@fluentui/react-icons";
import { MoreVertical24Regular } from "@fluentui/react-icons";
import { CalendarRtl24Regular } from "@fluentui/react-icons";
export default function InformacoesChave({ route }) {
  const [reservasChave, setReserva] = useState([
    { id: "1", nome: "Professora Adriana", inicio: "13:30", fim: "15:30" },
    { id: "2", nome: "Aluna Roberta", inicio: "13:30", fim: "15:00" },
    { id: "3", nome: "Aluno Diogo", inicio: "9:00", fim: "10:00" },
    { id: "4", nome: "Aluna Ana", inicio: "8:00", fim: "10:00" },
  ]);

  return (
    <View style={styles.container}>
      <View style={[{backgroundColor:"green",}]}>
        <View style={[{
          justifyContent:"flex-start",
          backgroundColor:"#EADDFF",
          height:"100%",
          paddingLeft:20, 
          }]}>
          <Text style={styles.texto}>
            {route.params.nome}
            <Text style={[{fontSize: 15, paddingLeft: 20, paddingTop: 10, fontWeight:"normal",}]}>
              {route.params.number}
            </Text>
          </Text>
          <Text style={[{ fontSize: 15, paddingTop:10, }]}>
            {route.params.status ? "Disponível": "Indisponível" }
          </Text>
          <View style={[{paddingTop:10,}]}>
            <TouchableOpacity style={[{ 
              flexDirection: "row",
              borderRadius: 4,
              borderColor: "#D0BCFF",
              borderWidth: 1,
              flex: 0.9,
              padding: 5, 
              width:"10%",
              justifyContent:"center",
              }]}>
                <Text style={[{color:"#6750A4",}]}>
                  RETIRAR AGORA
                </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[{ flexDirection:"row", justifyContent:"flex-end",  paddingRight:20, marginTop:-22, }]}>
          <TouchableOpacity 
              style={[{ 
                backgroundColor:"#6750A4",
                borderRadius:100,
                borderWidth:10,
                borderColor:"#6750A4",
                flexDirection: "row",
                width: "8%",
                justifyContent:"center",
                shadowColor:"black",
                shadowOpacity: 0.2,
                shadowRadius: 6,
                shadowOffset:{width:-2, height:2},
                justifyContent:"space-evenly",
              }]}
            >
              <CalendarRtl24Regular color="#ffff"/>
              <Text style={styles.textoBotao}>RESERVAR</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View>
          <Text style={styles.textoReserva}>Reservas Futuras</Text>
          <View>
              <Text style={[{ marginStart: 40, marginTop:20, }]}>
                Hoje
              </Text>
              <FlatList

                keyExtractor={(item) => item.id}
                data={reservasChave}
                renderItem={({ item }) => <ReservasDaChave data={item} />}

              />
          </View>

        </View>
    </View>
  );
}
