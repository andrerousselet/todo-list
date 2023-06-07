import { StyleSheet, Text, View } from "react-native";
import { Home } from "./src/screens/Home";
import { Header } from "./src/components/Header";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />
      <Home />
    </>
  );
}
