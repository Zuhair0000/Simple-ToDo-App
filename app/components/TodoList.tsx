import { Ionicons } from "@expo/vector-icons"; // for icons
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type List = {
  id: string;
  text: string;
  completed: boolean;
};

interface Props {
  todoList: List[];
  handleRemoveTask: (id: string) => void;
  handleToggleButton: (id: string) => void;
}

const TodoList = ({
  todoList,
  handleRemoveTask,
  handleToggleButton,
}: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            {/* Task Text */}
            <Text
              style={[
                styles.itemText,
                item.completed && {
                  textDecorationLine: "line-through",
                  color: "grey",
                },
              ]}
            >
              {item.text}
            </Text>

            {/* Action buttons */}
            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => handleToggleButton(item.id)}
              >
                <Ionicons
                  name="checkmark-circle"
                  size={24}
                  color={item.completed ? "green" : "grey"}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => handleRemoveTask(item.id)}
              >
                <Ionicons name="trash" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2, // Android shadow
  },
  itemText: {
    fontSize: 16,
    flex: 1,
    color: "black",
  },
  actions: {
    flexDirection: "row",
  },
  iconButton: {
    marginLeft: 12,
  },
});

export default TodoList;
