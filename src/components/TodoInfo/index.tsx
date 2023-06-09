import { View, Text } from "react-native";
import { styles } from "./styles";

export function TodoInfo() {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.todoInfo}>
        <Text style={styles.createdText}>Criadas</Text>
        <View style={styles.zeroDiv}>
          <Text style={styles.textInfo}>0</Text>
        </View>
      </View>
      <View style={styles.todoInfo}>
        <Text style={styles.doneText}>Concluidas</Text>
        <View style={styles.zeroDiv}>
          <Text style={styles.textInfo}>0</Text>
        </View>
      </View>
    </View>
  );
}
