import { View, StyleSheet, ImageBackground, Text, StatusBar } from "react-native"
import Sizes from "../../constants/Sizes"
import getFormattedDate from "../../utils/getDate"

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <ImageBackground
                resizeMode='cover'
                style={styles.imageBg}
                source={require("../../assets/images/Header.png")}>
                <Text style={styles.dateText}>{getFormattedDate()}</Text>
                <Text style={styles.headerText}>My Todo List</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 250
    },
    imageBg: {
        flex: 1,
        paddingTop: StatusBar.currentHeight + 50,
        paddingHorizontal: Sizes.padding200,
    },
    dateText: {
        textAlign: "center",
        color: "#fff",
        fontFamily: "inter",
        fontSize: 15,
    },
    headerText: {
        fontFamily: "inter-bold",
        fontSize: 30,
        color: "#fff",
        textAlign: "center",
        marginTop: Sizes.padding300
    }
})