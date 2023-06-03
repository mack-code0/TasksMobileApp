import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Button({ children, style, onPress }) {
    return <View style={[styles.buttonContainer, style]}>
        <Pressable
            onPress={onPress}
            android_ripple={{ color: "#5b4597" }}
            style={({ pressed }) => [pressed && styles.pressed, styles.pressableStyle]}>
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#4A3780",
        borderRadius: 50,
        overflow: "hidden"
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
        fontFamily: "inter-bold",
        fontSize: 18
    },
    pressed: {
        backgroundColor: "#5b4597"
    },
    pressableStyle: {
        paddingVertical: 20,
    }
})