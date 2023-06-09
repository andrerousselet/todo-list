import { TextInput, View, TouchableOpacity, Text } from "react-native";
import { styles } from "./styles";
import { TodoCard } from "../../components/TodoCard";

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
      <View>
        <TodoCard />
      </View>
    </View>
  );
}
