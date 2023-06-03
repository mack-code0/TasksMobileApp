import { View, StyleSheet, ImageBackground, Text, StatusBar, Pressable } from "react-native"
import Sizes from "../../constants/Sizes"
import { MaterialCommunityIcons } from "@expo/vector-icons"


export default function Header({ onCloseHandler }) {
    return (
        <View style={styles.headerContainer}>
            <ImageBackground
                resizeMode="cover"
                style={styles.imageBg}
                source={require("../../assets/images/Header.png")}>
                <View>
                    <Pressable onPress={onCloseHandler} style={styles.closeIcon}>
                        <MaterialCommunityIcons
                            name="window-close"
                            size={25}
                            color="#1B1B1D"
                        />
                    </Pressable>
                </View>
                <View style={{ flexGrow: 1 }}>
                    <Text style={styles.text}>Add new task</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 120,
        // paddingVertical: 300
    },
    imageBg: {
        flexGrow: 1,
        paddingTop: StatusBar.currentHeight+25,
        paddingHorizontal: Sizes.padding200,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    text: {
        textAlign: "center",
        color: "#fff",
        fontFamily: "inter",
        fontSize: 15,
    },
    closeIcon: {
        backgroundColor: "#fff",
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center"
    }
})