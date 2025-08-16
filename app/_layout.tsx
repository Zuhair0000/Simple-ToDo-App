import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Simple To-Do App",
          headerStyle: { backgroundColor: "#4e0329" },
          headerTintColor: "white",
        }}
      />
    </Stack>
  );
}
