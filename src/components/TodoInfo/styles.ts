import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  infoContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 31,
    paddingBottom: 20,
  },
  todoInfo: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  createdText: {
    color: "#4EA8DE",
    fontFamily: "Inter_700Bold",
    fontSize: 14,
  },
  doneText: {
    color: "#8284FA",
    fontFamily: "Inter_700Bold",
    fontSize: 14,
  },
  zeroDiv: {
    backgroundColor: "#333333",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 60,
  },
  textInfo: {
    color: "#F2F2F2",
    fontFamily: "Inter_700Bold",
    fontSize: 14,
  },
})