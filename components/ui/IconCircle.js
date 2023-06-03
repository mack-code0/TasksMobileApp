import { View, StyleSheet } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function Icon({ type }) {
    return <View style={[styles.container, {
        backgroundColor: type === "calendar"
            ? "#E7E2F3"
            : type === "trophy"
                ? "#FEF5D3"
                : "#DBECF6"
    }]}>
        {type === "calendar"
            ? <MaterialCommunityIcons
                name="calendar-today"
                size={27}
                color="#4A3780"
            />
            : type === "trophy"
                ? <MaterialCommunityIcons
                    name="trophy-outline"
                    size={27}
                    color="#403100"
                />
                : <MaterialCommunityIcons
                    name="view-list-outline"
                    size={27}
                    color="#194A66"
                />}
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: 55,
        height: 55,
        borderRadius: 27.5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }
})