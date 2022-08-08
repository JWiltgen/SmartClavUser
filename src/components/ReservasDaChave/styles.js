import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFF",
    marginVertical: 20,
    padding: 30,
    flex: 1,
    marginHorizontal: 40,
    borderRadius: 8,
    alignItems: "flex-start",
    flexDirection: "row",
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
  },
  img: {
    flex: 0.8,
    alignSelf: "center",
  },
});
