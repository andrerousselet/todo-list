import { View, Image } from "react-native";
import { styles } from "./styles";

const logo = require("../../../assets/images/todo-logo.png");

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={logo} alt="Todo Logo" />
    </View>
  );
}
