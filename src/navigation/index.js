import React from "react";
import TasksScreen from "../screens/Tasks";
import {RecipesStack} from "./RecipesStack";

import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

//Pour switcher d'écran lors des actions des utilisateurs
// Menu du bas (liste de course, ou liste de recettes)
export default function AppNavigation() {
    return(
        <NavigationContainer>
            <Tabs.Navigator screenOptions={{headerShown: false}}>
                <Tabs.Screen name="Recettes" component={RecipesStack}/>
                <Tabs.Screen name="Liste de course" component={TasksScreen}/>
                <Tabs.Screen name="Profile" component={TasksScreen}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
}


