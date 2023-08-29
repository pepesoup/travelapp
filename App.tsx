const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SchemaHuvudvy from "./screens/SchemaHuvudvy";
import SchemaDetaljvy from "./screens/SchemaDetaljvy";
import Notiser from "./screens/Notiser";
import Info from "./screens/Info";
import Retreafy from "./screens/Retreafy";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
    const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
    const [fontsLoaded, error] = useFonts({
        "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
        "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
        "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
        "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    });

    if (!fontsLoaded && !error) {
        return null;
    }

    return (
        <>
            <NavigationContainer>
                {hideSplashScreen ? (
                    <Stack.Navigator screenOptions={{ headerShown: true }}>
                        <Stack.Screen
                            name="SchemaHuvudvy"
                            component={SchemaHuvudvy}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="SchemaDetaljvy"
                            component={SchemaDetaljvy}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Notiser"
                            component={Notiser}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Info"
                            component={Info}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="Retreafy"
                            component={Retreafy}
                            options={{ headerShown: false }}
                        />
                    </Stack.Navigator>
                ) : null}
            </NavigationContainer>
        </>
    );
};
export default App;
