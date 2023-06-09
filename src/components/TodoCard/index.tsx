import { useState } from "react";
import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";

type TodoProps = {
  text: string;
};

export function TodoCard({ text }: TodoProps) {
  const [isChecked, setChecked] = useState<boolean>(false);
  const [fontsLoaded] = useFonts({ Inter_400Regular });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.cardContainer}>
      <Checkbox
        style={styles.cardCheckbox}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#5E60CE" : "#4EA8DE"}
      />
      <Text style={styles.cardText}>{text}</Text>
      <Ionicons name="trash" size={22} color="#808080" />
    </View>
  );
}
