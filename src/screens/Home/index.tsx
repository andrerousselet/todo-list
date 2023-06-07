import { TextInput, View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.todoForm}>
        <TextInput
          style={styles.todoInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.todoAddButton}>
          <View style={styles.circle}>
            <Text style={styles.plus}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
