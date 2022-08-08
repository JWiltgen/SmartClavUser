import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F2F9",
    flex: 1,
  },
  searchArea: {
    marginHorizontal: 40,
    marginVertical: 20,
  },
  searchInput: {
    fontSize: 18,
    width:"80%",
    padding:"20",
  },
  inputArea: {
    flexDirection: "row",
    borderRadius: 4,
    borderColor: "#1414",
    borderWidth: 1,
    padding: 8,
    flex: 0.9,
    marginHorizontal:20,
    alignItems:"flex-start",
  },
  searchIcon: {
    alignSelf: "center",
  },
});
