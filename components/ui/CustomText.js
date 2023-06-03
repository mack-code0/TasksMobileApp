import { Text, StyleSheet } from "react-native"

export default function CustomText({ children, style }) {
    return <Text style={[styles.text, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "inter-bold",
        fontSize: 16,
    }
})