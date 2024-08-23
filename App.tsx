import { StyleSheet } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { Provider as ModalProvider } from "#/modal/ModalProvider";
import { Provider as LightBoxProvider } from "#/lightbox/LightProvider";
import { StatusBar } from "expo-status-bar";
import { ApolloProvider } from "@apollo/client";
import { client } from "#/provider/ClientProvider";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "#/screen/Login";
import More from "#/screen/More";
import Home from "#/screen/Home";
import { BottomBar } from "#/route/BottomBar";
import AppProvider from "#/provider/AppProvider";
import useApp from "#/hooks/useApp";
import Branch from "#/screen/Branch";
import UserDetail from "#/screen/UserDetail";
import { useFonts } from "expo-font";
import Notification from "#/screen/Notification";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [loaded, error] = useFonts({
    "Inter-Black": require("./assets/fonts/Inter-Regular.ttf"),
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView style={styles.gestureHandlerRootView}>
        <ApolloProvider client={client}>
          <ModalProvider>
            <LightBoxProvider>
              <StatusBar style={"dark"} />
              <AppProvider>
                <InnerApp />
              </AppProvider>
            </LightBoxProvider>
          </ModalProvider>
        </ApolloProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;

function InnerApp() {
  const { hasSession } = useApp();

  if (!hasSession) {
    return <Login />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={MainStackScreens} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Branch" component={Branch} />
        <Stack.Screen name="UserDetail" component={UserDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainStackScreens = () => {
  const tabBar = React.useCallback(
    (props: any) => <BottomBar {...props} />,
    []
  );
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      backBehavior="initialRoute"
      screenOptions={{ headerShown: false }}
      tabBar={tabBar}
    >
      <Tab.Screen name="HomeTab" component={Home} />
      <Tab.Screen name="MoreTab" component={More} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    height: "100%",
  },
});
