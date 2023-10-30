import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import DetailDois from "./pages/Detail/indexDois";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Home"
                component={Home}
                options={{headerShown: false}}
                />
                <Stack.Screen 
                name="Detail"
                component={Detail}
                />
                <Stack.Screen 
                name="DetailDois"
                component={DetailDois}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}