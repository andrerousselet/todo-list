import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";

type TodoProps = {
  text: string;
  onRemove: () => void;
};

export function TodoCard({ text, onRemove }: TodoProps) {
  const [isChecked, setChecked] = useState<boolean>(false);

  return (
    <View style={styles.cardContainer}>
      <Checkbox
        style={styles.cardCheckbox}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#5E60CE" : "#4EA8DE"}
      />
      <Text style={styles.cardText}>{text}</Text>
      <TouchableOpacity onPress={onRemove}>
        <Ionicons name="trash" size={22} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
