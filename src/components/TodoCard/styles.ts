import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    backgroundColor: "#262626",
    borderColor: "#333333",
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row",
    gap: 12,
    height: 64,
    justifyContent: "space-between",
    padding: 12,
  },
  cardCheckbox: {
    borderRadius: 100,
    color: "#4EA8DE",
    height: 20,
    width: 20,
  },
  cardText: {
    color: "#F2F2F2",
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    flex: 1,
  }
});