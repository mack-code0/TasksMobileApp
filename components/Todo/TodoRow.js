import { View, StyleSheet, Text, Pressable } from "react-native"
import Sizes from "../../constants/Sizes"
import IconCircle from "../ui/IconCircle";
import { Checkbox } from 'react-native-paper';
import { useState } from "react";

export default function TodoRow({ type, completed, title }) {
    const [checked, setChecked] = useState(completed)
    return <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={() => setChecked(!checked)}
    >
        <View
            style={styles.todoRow}>
            <View style={[
                styles.iconTextBox,
                checked && styles.todoRowCompleted
            ]}>
                <IconCircle type={type} />
                <View style={styles.textBox}>
                    <Text
                        style={[
                            styles.todoTitle,
                            checked && styles.todoTitleCompleted
                        ]}>
                        {title}
                    </Text>
                    <Text
                        style={[
                            styles.todoTime,
                            checked && styles.todoTimeCompleted
                        ]}>
                        4:00pm
                    </Text>
                </View>
            </View>
            <View>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(!checked)}
                    color="#4A3780"
                />
            </View>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    todoRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: Sizes.padding200,
    },
    iconTextBox: {
        flexDirection: "row"
    },
    todoRowCompleted: {
        opacity: 0.5
    },
    textBox: {
        marginLeft: 13
    },
    todoTitle: {
        fontFamily: "inter-bold",
        fontSize: 16,
    },
    todoTitleCompleted: {
        textDecorationLine: "line-through"
    },
    todoTime: {
        fontFamily: "inter-medium",
        fontSize: 12
    },
    todoTimeCompleted: {
        textDecorationLine: "line-through"
    },
    pressed: {
        backgroundColor: "#aeadff14"
    }
})