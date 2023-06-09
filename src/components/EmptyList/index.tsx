import { View, Text } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";
import { styles } from "./styles";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export function EmptyList() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.emptyContainer}>
      <Octicons name="checklist" size={72} color="#808080" />
      <View>
        <Text style={styles.emptyText1}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.emptyText2}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  );
}
