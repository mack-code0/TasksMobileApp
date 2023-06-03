import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Todo from './screens/Todo';
import { useState } from 'react';
import AddTodo from './screens/AddTodo';

export default function App() {
  const [addTodo, setAddTodo] = useState(false)
  const [fontsLoaded] = useFonts({
    "inter": require("./assets/fonts/Inter-Regular.ttf"),
    "inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
    "inter-medium": require("./assets/fonts/Inter-Medium.ttf"),
    "inter-black": require("./assets/fonts/Inter-Black.ttf"),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={{ flex: 1, flexDirection: "column" }}>
        <ScrollView bounces={false} style={styles.container}>
          {addTodo ? <AddTodo setAddTodo={setAddTodo} addTodo={addTodo} /> : <Todo setAddTodo={setAddTodo} />}
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F1F5F9"
  }
});
