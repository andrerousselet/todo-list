import { useState } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { TodoCard } from "../../components/TodoCard";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { EmptyList } from "../../components/EmptyList";

type Todo = {
  id: string;
  text: string;
};

export function Home() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([
    // { id: "1", text: "meditar" },
    // { id: "2", text: "malhar" },
    // { id: "3", text: "molhar as plantas" },
    // { id: "4", text: "estudar React Native" },
    // { id: "5", text: "fazer compras no mercado" },
    // { id: "6", text: "cortar o cabelo" },
    // { id: "7", text: "fazer a barba" },
    // { id: "8", text: "comprar comida da Ravi" },
  ]);
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.todoForm}>
        <TextInput
          style={styles.todoInput}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          value={todo}
          onChangeText={setTodo}
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
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TodoCard text={item.text} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  );
}
