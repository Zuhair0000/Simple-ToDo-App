import React, { ReactNode } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface props {
  children: ReactNode;
  onPress: () => void;
}

const Button = ({ children, onPress }: props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4e0329",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 16,
    margin: 4,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
export default Button;
