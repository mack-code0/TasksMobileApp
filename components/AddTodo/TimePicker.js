import { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import DatePicker from 'react-native-modern-datepicker';
import { MaterialCommunityIcons } from "@expo/vector-icons"


export default function ({ value, onChange }) {
    const [showTime, setShowTime] = useState(false)
    return <View style={styles.rootContainer}>
        <Pressable
            android_ripple={{ color: "#e0e0e04c" }}
            onPress={() => setShowTime(!showTime)}
            style={({ pressed }) => [pressed && styles.iosPressed, styles.container]}>
            <Text style={styles.text}>{value ? value : "Time"}</Text>
            <MaterialCommunityIcons
                name="clock-outline"
                size={25}
                color="#1B1B1D"
            />
        </Pressable>

        {showTime
            && <DatePicker
                options={{
                    backgroundColor: '#fff',
                    textHeaderColor: '#1B1B1D',
                    textDefaultColor: '#1B1B1D',
                    selectedTextColor: '#fff',
                    mainColor: '#1B1B1D',
                    textSecondaryColor: '#1B1B1D',
                    borderColor: '#E0E0E0',
                    defaultFont: "inter",
                    headerFont: "inter"
                }}
                mode="time"
                minuteInterval={1}
                style={styles.datePicker}
                onTimeChange={(time) => { onChange(time); setShowTime(false) }} />}
    </View>
}

const styles = StyleSheet.create({
    rootContainer: {
        // position: "relative",
    },
    container: {
        paddingVertical: 14,
        paddingHorizontal: 12,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#E0E0E0",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    datePicker: {
        position: "absolute",
        top: 60,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
        right: 0,
        width: 310
    },
    text: {
        fontFamily: "inter",
        color: "#1B1B1D"
    },
    iosPressed: {
        backgroundColor: "#e0e0e04c"
    }
})