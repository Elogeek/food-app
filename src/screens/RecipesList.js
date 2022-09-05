import React, {useEffect} from 'react';
import {Text} from "react-native";
import {useFetchRecipes} from "../api/recipes/useFetchRecipes";
import {useSelector} from "react-redux";
import {getRecipesList} from "../redux/selectors";
import {recipes} from "../redux/reducers/recipes";

export default function RecipesList() {

    const allRecipes = useSelector(getRecipesList);
    const {getAllRecipes} = useFetchRecipes();
    console.log("ALL RECIPES", allRecipes);

    useEffect(() => {
        getAllRecipes()
    }, [])

    return (
        <>
            <Text>Recipes list</Text>
                 {allRecipes.map(recipe => (
                    <Text>{recipe.title}</Text>
            ))}
       </>
    );
}
