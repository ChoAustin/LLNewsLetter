import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="WelcomeScreen">
            <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 20,
                    },
                }}
            />
            <Stack.Screen
                name="Subscribe"
                component={SubscribeScreen}
                options={{
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 20,
                        color: "black",
                    },
                    headerBackTitle: "Welcome",
                    headerBackTitleStyle: {
                        fontSize: 16,
                    },
                    headerTintColor: "#4d97f0",
                }}
            />
        </Stack.Navigator>
    );
};

export default RootNavigator;
