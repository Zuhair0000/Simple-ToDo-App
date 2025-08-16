import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Button from "../components/Button";

interface props {
  handleChangeText: (e: string) => void;
  handleAddTask: () => void;

  task: any;
}
const Input = ({ handleAddTask, handleChangeText, task }: props) => {
  return (
    <View style={styles.appContainer}>
      <TextInput
        style={styles.inputField}
        value={task}
        onChangeText={handleChangeText}
        placeholder="What's you plans..."
        placeholderTextColor="#cccccc"
      />

      <Button onPress={handleAddTask}>Add task!</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    marginHorizontal: 16,
    padding: 16,
  },
  inputField: {
    borderWidth: 2,
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    color: "#4e0329",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default Input;
