import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#1D5082',
    backgroundColor: "#252338",
    alignItems: "center",
    justifyContent: "center",
  },
  areaLogin: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 300,
    borderRadius: 10,
    //backgroundColor: '#BFE4FC',
    backgroundColor: "#e2e2e7",
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: "#000",
    shadowOpacity: 0.8,
  },
  input: {
    width: 250,
    fontSize: 20,
    margin: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  textoLogin: {
    color: "#000",
  },
  areaBotao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20,
  },
  botaoEntrar: {
    //backgroundColor: '#BFE4FC',
    backgroundColor: "#e2e2e7",
  },
  botaoCadastrar: {
    backgroundColor: "#252338",
    borderWidth: 1,
    borderColor: "#e2e2e7",
  },
  textoBotao: {
    fontSize: 20,
  },
  textoBotaoCadastrar: {
    color: "#e2e2e7",
  },
  botao: {
    width: 140,
    alignItems: "center",
    borderRadius: 50,
    padding: 8,
    margin: 10,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 15,
  },
  loginMode: {
    color: "#e2e2e7",
  },
  loginModeArea: {
    marginTop: 10,
  },
});
