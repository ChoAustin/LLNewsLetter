import * as React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    useColorScheme,
    Pressable,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
    const colorScheme = useColorScheme();
    const textColor = colorScheme === "light" ? "black" : "white";
    const backgroundColor = colorScheme === "light" ? "#fff" : "#333333";

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require("../assets/little-lemon-logo.png")}
                />
            </View>
            <Text style={[styles.headerText, { color: textColor }]}>
                Little Lemon, your local Mediterranean Bistro
            </Text>
            <Pressable
                onPress={() => navigation.navigate("Subscribe")}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Newsletter</Text>
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    logo: {
        height: 300,
        width: 300,
        marginHorizontal: 30,
        marginVertical: 100,
        resizeMode: "contain",
    },
    headerText: {
        fontSize: 21,
        padding: 20,
        marginVertical: -50,
        textAlign: "center",
        fontWeight: "bold",
    },
    button: {
        padding: 10,
        width: 355,
        marginVertical: 180,
        margin: 5,
        backgroundColor: "#3e524b",
        borderColor: "#3e524b",
        borderWidth: 2,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 15,
    },
});

export default WelcomeScreen;
