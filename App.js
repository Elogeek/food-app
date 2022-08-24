import React from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  useColorScheme
} from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.light-content,
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : "light-content"}></StatusBar>
    </SafeAreaView>
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
