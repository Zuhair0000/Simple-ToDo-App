import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

type List = {
  id: string;
  text: string;
  completed: boolean;
};

export default function Index() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState<List[]>([]);

  const handleAddTask = () => {
    setTodoList((prev) => [
      ...prev,
      { id: Math.random().toString(), text: task, completed: false },
    ]);
    setTask("");
  };

  const handleChangeText = (e: string) => {
    setTask(e);
  };

  const handleRemoveTask = (id: string) => {
    setTodoList((prev) => prev.filter((task) => task.id !== id));
  };

  const handleToggleButton = (id: string) => {
    setTodoList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <LinearGradient colors={["#ddb52f", "#4e0329"]} style={{ flex: 1 }}>
      <SafeAreaView>
        <Input
          handleAddTask={handleAddTask}
          handleChangeText={handleChangeText}
          task={task}
        />

        <TodoList
          todoList={todoList}
          handleRemoveTask={handleRemoveTask}
          handleToggleButton={handleToggleButton}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}
