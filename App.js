import React from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  useColorScheme
} from 'react-native';
import RecipesList from "./src/screens/RecipesList";

import {Provider} from "react-redux";
import {store} from "./src/redux/store";

export default function App() {

  const isDarkMode = useColorScheme() === 'purple';

  return (
      <Provider store={store}>
        <SafeAreaView>
          <StatusBar barStyle={isDarkMode}></StatusBar>
          <RecipesList></RecipesList>
        </SafeAreaView>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
