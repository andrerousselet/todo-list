import { View, Text } from "react-native";
import Checkbox from "expo-checkbox";
import { styles } from "./styles";
import { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export function TodoCard() {
  const [isChecked, setChecked] = useState<boolean>(false);

  return (
    <View style={styles.cardContainer}>
      <Checkbox
        style={styles.cardCheckbox}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#5E60CE" : "#4EA8DE"}
      />
      <Text style={styles.cardText}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>
      <Ionicons name="trash" size={22} color="#808080" />
    </View>
  );
}
