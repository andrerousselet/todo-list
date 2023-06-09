import { useState } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Alert,
} from "react-native";
import { randomUUID } from "expo-crypto";
import { TodoCard } from "../../components/TodoCard";
import { EmptyList } from "../../components/EmptyList";
import { TodoInfo } from "../../components/TodoInfo";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { styles } from "./styles";

type Todo = {
  id: string;
  text: string;
};

export function Home() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  if (!fontsLoaded) {
    return null;
  }

  function handleAddTodo() {
    if (!todo) {
      return Alert.alert(
        "Vazio!",
        "Escreva uma tarefa para ser adicionada à lista!"
      );
    }
    setTodos([
      ...todos,
      {
        id: randomUUID(),
        text: todo,
      },
    ]);
    setTodo("");
  }

  function handleDeleteTodo(id: string) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
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
        <TouchableOpacity style={styles.todoAddButton} onPress={handleAddTodo}>
          <View style={styles.circle}>
            <Text style={styles.plus}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TodoInfo />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoCard
            text={item.text}
            onRemove={() => handleDeleteTodo(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  );
}
