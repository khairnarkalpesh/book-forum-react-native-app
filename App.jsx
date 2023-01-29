import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import getTheme from "./src/theme";
import RootNavigator from "./src/RootNavigator";

import ToastContainer from "./src/components/Toast";
import StatusModal from "./src/components/StatusModal";
import { Provider, useSelector } from "react-redux";
import store from "./store";
import LoginScreen from "./src/screens/LoginScreen";
import GenresScreen from "./src/screens/GenresScreen";
import SignupNavigator from "./src/SignupNavigator";

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const scheme = useColorScheme();
  const user = useSelector((state) => state.LOGIN);
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <NavigationContainer theme={getTheme(scheme)}>
      <StatusBar />
      <StatusModal />
      {user && user.logged ? <RootNavigator /> : <SignupNavigator />}
      <ToastContainer />
    </NavigationContainer>
  );
};
export default AppWrapper;
