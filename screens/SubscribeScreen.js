import * as React from "react";
import {
    View,
    Pressable,
    Text,
    TextInput,
    StyleSheet,
    Image,
    useColorScheme,
    Modal,
} from "react-native";
import { useState } from "react";
import { validateEmail } from "../utils";

const SubscribeScreen = ({ navigation }) => {
    const colorScheme = useColorScheme();
    const textColor = colorScheme === "light" ? "black" : "white";
    const backgroundColor = colorScheme === "light" ? "#fff" : "#333333";

    const [email, setEmail] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const isEmailValid = validateEmail(email);

    const handleModalOk = () => {
        setModalVisible(false);
        setEmail("");
    };

    const handleSubscribe = () => {
        if (!email) {
            setAlertMessage("Please enter your email address.");
            setModalVisible(true);
        } else if (!isEmailValid) {
            setAlertMessage("Please enter a valid email address.");
            setModalVisible(true);
        } else {
            setAlertMessage("Thanks for subscribing, stay tuned!");
            setModalVisible(true);
        }
    };

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <View style={styles.header}>
                <Image
                    style={styles.logo}
                    source={require("../assets/little-lemon-logo-grey.png")}
                />
            </View>

            <Text style={[styles.regularText, { color: textColor }]}>
                Subscribe to our newsletter for our latest delicious recipes!
            </Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Type your email"
                keyboardType={"email-address"}
            />
            <Pressable
                onPress={handleSubscribe}
                style={[
                    styles.button,
                    {
                        backgroundColor: isEmailValid ? "#3e524b" : "#a5a5a5",
                        borderColor: isEmailValid ? "#3e524b" : "#a5a5a5",
                    },
                ]}
            >
                <Text style={styles.buttonText}>Subscribe</Text>
            </Pressable>

            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="pop"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <Text
                            style={[styles.modalMessage, styles.indentedText]}
                        >
                            {alertMessage}
                        </Text>
                        <View style={styles.divider} />
                        <Pressable
                            onPress={handleModalOk}
                            style={styles.modalButton}
                        >
                            <Text style={styles.modalButtonText}>OK</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
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
        height: 100,
        width: 100,
        marginHorizontal: 130,
        resizeMode: "contain",
    },
    regularText: {
        fontSize: 22,
        padding: 10,
        marginVertical: 10,
        textAlign: "center",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: "black",
        backgroundColor: "white",
        borderRadius: 5,
        color: "black",
    },
    button: {
        padding: 10,
        width: 375,
        marginVertical: 19,
        margin: -5,
        backgroundColor: "#3e524b",
        borderColor: "#3e524b",
        borderWidth: 2,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    modalContent: {
        width: 300,
        padding: 15,
        backgroundColor: "white",
        borderRadius: 15,
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 5,
        marginBottom: 5,
    },
    modalMessage: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    modalButton: {
        width: 50,
    },
    modalButtonText: {
        color: "#4d97f0",
        fontWeight: "bold",
        fontSize: 20,
        marginHorizontal: 10,
    },
    divider: {
        height: 1,
        width: "100%",
        backgroundColor: "#ccc",
        marginVertical: 10,
    },
    indentedText: {
        marginLeft: 15,
        textAlign: "center",
    },
});

export default SubscribeScreen;
