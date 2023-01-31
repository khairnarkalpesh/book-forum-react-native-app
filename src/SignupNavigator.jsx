import React from "react";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import BooksScreen from "./screens/BooksScreen";
import BookListScreen from "./screens/BookListScreen";
import BookDetailsScreen from "./screens/BookDetailsScreen";
import BookSearchScreen from "./screens/BookSearchScreen";
import LoginScreen from "./screens/LoginScreen";
import GenresScreen from "./screens/GenresScreen";

// Root Stack of App
function RootNavigator() {
  const BookStack = createSharedElementStackNavigator();

  const fadeScreen = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });

  const bookTransition = {
    animation: "spring",
    config: {
      mass: 3,
      damping: 300,
      stiffness: 1000,
      overshootClamping: false,
      restDisplacementThreshold: 10,
      restSpeedThreshold: 10,
    },
  };

  const searchTranstion = {
    animation: "spring",
    config: {
      mass: 3,
      damping: 300,
      stiffness: 1000,
      overshootClamping: false,
      restDisplacementThreshold: 10,
      restSpeedThreshold: 10,
    },
  };

  return (
    <BookStack.Navigator
      initialRouteName="signup"
      screenOptions={{
        headerShown: false,
        cardOverlayEnabled: false,
        // cardStyle: { backgroundColor: "transparent" },
      }}
      detachInactiveScreens={false}
    >
      <BookStack.Screen name="signup" component={LoginScreen} />
      <BookStack.Screen name="genrescreen" component={GenresScreen} />
    </BookStack.Navigator>
  );
}

export default React.memo(RootNavigator);
