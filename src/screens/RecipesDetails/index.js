import React, {useEffect} from "react";
import {Image, Text, TouchableOpacity, View, StyleSheet, ScrollView} from "react-native";
import {useSelector} from "react-redux";
import {getSelectedRecipe} from "../../redux/selectors";
import {useFetchRecipes} from "../../api/recipes/useFetchRecipes";

export default function RecipesDetails({route,navigation}) {

    const {id} = route.params
    //console.log("ID = ", id);

    const {getRecipeById} = useFetchRecipes()
    const recipe = useSelector(getSelectedRecipe);
    //console.log("recipe = ", recipe);

    useEffect(() => {
        getRecipeById(id)
    }, []);

    // If recipe is null display white page
    if (!recipe) {
        return <View />
    }

    return(
        <>
            <ScrollView>
                <Image source={{uri: recipe.image}} style={styles.image} />
                <Text style={styles.title}>{recipe.title}</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.goBack()
                    }}>
                        <Text>Revenir à l'accueil</Text>
                </TouchableOpacity>
                <Text style={styles.caption}>Ready in {recipe.readyInMinutes} minutes</Text>
                <Text style={styles.caption}>{recipe.summary}</Text>
                <View style={styles.containerIngredients}>
                    <Text style={styles.titleIngredients}>Ingredients:</Text>
                    {recipe.extendedIngredients?.map(ing => (
                            <Ingredient ing={ing}/>
                        )
                    )}
                </View>

            </ScrollView>
        </>
    );
}

// Desgin a recipe
const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200,
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "orange"
    },
    caption: {
        textAlign: "center"
    },
    containerIngredients: {
        marginHorizontal: 16,
        marginVertical: 10,
        borderTopColor: "grey",
        borderTopWidth: 1,
        padding: 6
    },
    titleIngredients: {
        fontWeight: "bold",
        fontSize: 16,
        paddingBottom: 20
    }
});
