import { StyleSheet } from "react-native";
import { colors } from "../../colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `${colors.primary_light}`,
  },
  input: {
    marginBottom: 10,
    backgroundColor: `${colors.light}`,
    borderRadius: 4,
    height: 45,
    width: "85%",
    padding: 10,
    borderWidth: 1,
    borderColor: `${colors.dark}`,
  },
  button: {
    backgroundColor: `${colors.primary}`,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
    borderRadius: 4,
    marginVertical: 5,
  },
  buttontext: {
    color: "#FFF",
    fontSize: 20,
  },
  text: {
    color: "#333",
    fontSize: 22,
  },
  buttonsArea: {
    width: "85%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addButton: {
    width: "48%",
  },
});
