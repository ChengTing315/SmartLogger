import React from "react";
import { StyleSheet, Image, Button, useColorScheme } from "react-native";

import { LogBox } from "react-native";
//AWS
import { Amplify } from "aws-amplify";
import awsconfig from "./src/aws-exports";

//React Native Navigation
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreenDetail from "./src/Screen/HomeScreen";
import HoleScreenDetail from "./src/Screen/HoleScreen";
import GeneralInfoScreenDetail from "./src/Screen/GeneralInfoScreen";
import RockNsoilScreenDetail from "./src/Screen/RockNsoilScreen";
import DepthScreenDetail from "./src/Screen/DepthScreen";

import DS1ScreenDetail from "./src/Screen/DS1Screen";
import DS2ScreenDetail from "./src/Screen/DS2Screen";
import DescriptionScreenDetail from "./src/Screen/DescriptionScreen";

Amplify.configure(awsconfig);

function LogoTitle() {
  return (
    <Image
      style={{ width: 25, height: 25 }}
      source={require("./assets/download.png")}
    />
  );
}

function MyStack() {
  // LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
  // LogBox.ignoreAllLogs(); //Ignore all log notifications

  return (
    <Stack.Navigator
      screenOptions={{
        //headerShown: false,
        headerStyle: {
          backgroundColor: "#800080",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center",
      }}
      initialRouteName="Home"
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Smart Logger",
          headerLeft: (props) => <LogoTitle {...props} />,
          // headerRight: () => (
          //   <Button onPress={() => RefreshPage()} title="Refresh" />
          // ),
          //headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />

      <Stack.Screen
        name="Hole"
        component={HoleScreen}
        screenOptions={{
          backgroundColor: "red",
        }}
      />

      <Stack.Screen
        name="General Information"
        component={GeneralInfoScreen}
        screenOptions={{
          backgroundColor: "red",
        }}
      />

      <Stack.Screen
        name="Rock/Soil"
        component={RockNsoilScreen}
        screenOptions={{
          backgroundColor: "#800080",
        }}
      />

      <Stack.Screen
        name="Depth"
        component={DepthScreen}
        screenOptions={{
          backgroundColor: "#80008",
        }}
      />

      <Stack.Screen
        name="DS1"
        component={DS1Screen}
        screenOptions={{
          backgroundColor: "#800080",
        }}
      />
      <Stack.Screen
        name="DS2"
        component={DS2Screen}
        screenOptions={{
          backgroundColor: "#800080",
        }}
      />
      <Stack.Screen
        name="Description"
        component={DescriptionScreen}
        screenOptions={{
          backgroundColor: "#800080",
        }}
      />
    </Stack.Navigator>
  );
}

function HomeScreen({ navigation, route }) {
  // navigation.setOptions({
  //   headerRight: () => (
  //     <Button onPress={() => console.log("123")} title="Create project" />
  //   ),
  // });

  return <HomeScreenDetail />;
}

function HoleScreen({ navigation, route }) {
  return <HoleScreenDetail navigation={navigation} route={route} />;
}

function GeneralInfoScreen({ navigation, route }) {
  return <GeneralInfoScreenDetail navigation={navigation} route={route} />;
}

function RockNsoilScreen({ navigation, route }) {
  return <RockNsoilScreenDetail navigation={navigation} route={route} />;
}

function DepthScreen({ navigation, route }) {
  return <DepthScreenDetail navigation={navigation} route={route} />;
}

function DS1Screen({ navigation, route }) {
  return <DS1ScreenDetail navigation={navigation} route={route} />;
}

function DS2Screen({ navigation, route }) {
  return <DS2ScreenDetail navigation={navigation} route={route} />;
}

function DescriptionScreen({ navigation, route }) {
  return <DescriptionScreenDetail navigation={navigation} route={route} />;
}

const CustomTheme = {
  dark: false,
  colors: {
    primary: "rgb(255, 45, 85)",
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={CustomTheme}>
      {/* <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}> */}
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
