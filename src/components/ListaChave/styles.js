import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 5,
    padding:  15,
    marginHorizontal: 40,
    borderRadius: 4,
    flexDirection: "row",    
    backgroundColor:"white",
    shadowColor:"black",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset:{width:-2, height:2},
  },
  areaTexto: {
    marginLeft: 10,
    flex: 2.2,
  },
  textoTitulo: {
    fontSize: 24,
    fontWeight:"bold",
  },
  img: {
    flex: 0.02,
    alignSelf: "flex-start",
    paddingTop: 8,
  },
});
