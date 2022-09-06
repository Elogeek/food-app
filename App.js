import React from 'react';
import {
  StyleSheet,
  StatusBar,
  useColorScheme
} from 'react-native';

import RecipesList from "./src/screens/RecipesList";
import RecipesDetails from "./src/screens/RecipesDetails";
import {Provider} from "react-redux";
import {store} from "./src/redux/store";

import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {

  const isDarkMode = useColorScheme() === 'purple';

  return (
      <Provider store={store}>
        <StatusBar barStyle={isDarkMode}></StatusBar>
        <NavigationContainer>
           <Stack.Navigator>
             <Stack.Screen
                 name="RecipesList"
                 component={RecipesList}
             />
             <Stack.Screen
               name="RecipesDetails"
               component={RecipesDetails}
             />
           </Stack.Navigator>
        </NavigationContainer>
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
