import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1A1A1A",
    flex: 1,
    paddingHorizontal: 24
  },
  todoForm: {
    alignItems: "center",
    flexDirection: "row",
    gap: 4,
    justifyContent: "center",
    width: "100%",
    marginTop: -31,
  },
  todoInput: {
    backgroundColor: "#262626",
    borderColor: "#0D0D0D",
    borderRadius: 6,
    borderWidth: 1,
    color: "#F2F2F2",
    flex: 1,
    fontSize: 16,
    height: 54,
    padding: 16,
  },
  todoAddButton: {
    alignItems: "center",
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    height: 54,
    justifyContent: "center",
    width: 54,
  },
  circle: {
    alignItems: "center",
    backgroundColor: "#1E6F9F",
    borderColor: "#F2F2F2",
    borderRadius: 100,
    borderWidth: 1,
    height: 16,
    justifyContent: "center",
    width: 16,
  },
  plus: {
    color: "#F2F2F2",
    fontSize: 16,
    lineHeight: 16,
    textAlign: "center",
  },
  infoContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 31,
    paddingBottom: 20,
    borderBottomColor: "#333333",
    borderBottomWidth: 1,
  },
  todoInfo: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  createdText: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "700",
  },
  doneText: {
    color: "#8284FA",
    fontSize: 14,
    fontWeight: "700",
  },
  zeroDiv: {
    backgroundColor: "#333333",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 60,
  },
  textInfo: {
    color: "#F2F2F2",
    fontSize: 14,
    fontWeight: "700",
  },
});