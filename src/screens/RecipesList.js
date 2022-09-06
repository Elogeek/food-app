import React, {useEffect} from 'react';
import {FlatList} from "react-native";
import {useFetchRecipes} from "../api/recipes/useFetchRecipes";
import {useSelector} from "react-redux";
import {getRecipesList} from "../redux/selectors";
import RecipeTile from "./RecipeTile";

export default function RecipesList({navigation}) {

    const allRecipes = useSelector(getRecipesList);

    const {getAllRecipes} = useFetchRecipes();
    console.log("ALL RECIPES", allRecipes);

    useEffect(() => {
        getAllRecipes()
    }, [])

    // Stock recette (= item) return recipe
    const renderItem = ({item}) => <RecipeTile navigation={navigation} item={item} />


    return (
        <FlatList
            data={allRecipes}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
        />
    );

}
