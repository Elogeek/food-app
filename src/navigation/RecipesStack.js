import Index from "../screens/RecipesList";
import RecipesDetails from "../screens/RecipesDetails";
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// Pour afficher le détail d'une recette lorsqu'on clique dessus
export  const RecipesStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="RecipesList"
                component={Index}
            />
            <Stack.Screen
                name="RecipesDetails"
                component={RecipesDetails}
            />
        </Stack.Navigator>
    )
}
