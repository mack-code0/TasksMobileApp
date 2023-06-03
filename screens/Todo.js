import { View, StyleSheet, Text } from "react-native"
import Header from "../components/Todo/Header"
import Sizes from "../constants/Sizes"
import TodoRow from "../components/Todo/TodoRow"
import Button from "../components/ui/Button"
import CustomText from "../components/ui/CustomText"

export default function Todo({ setAddTodo }) {
    return <View style={styles.rootScreen}>
        <Header />
        <View style={styles.todoContainer}>
            <View style={styles.innerTodoContainer}>
                <TodoRow title="Study lesson" type="calendar" />
                <TodoRow title="Run 5k" type="trophy" />
                <TodoRow title="Go to party" />
            </View>

            <CustomText style={{ marginVertical: 20 }}>Completed</CustomText>

            <View style={styles.innerTodoContainer}>
                <TodoRow title="Game meetup" completed={true} type="calendar" />
                <TodoRow title="Take out trash" type="trophy" />
            </View>
            <Button onPress={() => setAddTodo(prev => !prev)} style={{ marginTop: 40 }}>Add New Task</Button>
        </View>
    </View>
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    },
    todoContainer: {
        padding: Sizes.padding200,
        marginTop: -70
    },
    innerTodoContainer: {
        backgroundColor: "#fff",
        borderRadius: 15,
        overflow: "hidden"
    }
})