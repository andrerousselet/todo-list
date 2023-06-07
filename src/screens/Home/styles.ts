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
    marginTop: -27,
  },
  todoInput: {
    backgroundColor: "#262626",
    borderRadius: 6,
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
  }
});