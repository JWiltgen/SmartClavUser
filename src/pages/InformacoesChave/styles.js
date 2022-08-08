import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fundoCabecalho: {
    height: "10%",
    backgroundColor: "#EADDFF",
    alignItems: "flex-start",
    paddingTop: 10,
    paddingLeft: 20,
  },
  areaBotao: {
    justifyContent:"flex-end",
    flexDirection: "row",
    paddingRight:10,
    backgroundColor:"green", 

  },
  textoBotao: {
    fontSize: 12,
    color: "white",
    paddingTop: 4,
    paddingLeft: 4,
    fontWeight:"bold",
  },
  botao: {
    flex: 1,
    marginTop: 0,
    margin: 10,
    borderRadius: 50,
    padding: 12,
    backgroundColor: "#1D5082",
    alignSelf:"flex-end",
  },
  listaReservas: {
    flex: 2,
    
  },
  textoReserva: {
    marginStart: 40,
    fontSize: 18,
    marginTop: 20,
    fontSize: 24,
    fontWeight:"bold",
  },
  texto: {
    fontSize: 24,
    fontWeight:"bold",
    paddingTop: 15,
  },
});
