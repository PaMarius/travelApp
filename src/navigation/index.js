import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import DestinationScreen from "../screens/DestinationScreen";
import LoginScreen from "../screens/LoginScreen";
import UserProfileScreen from "../screens/UserProfileScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Destination" component={DestinationScreen} />
        <Stack.Screen name="Logout" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
