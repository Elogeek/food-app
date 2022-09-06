import {ADD_RECIPES, SELECTED_RECIPE} from "./actionsType";

//Add recipe
export const addRecipes = (data) => ({
    type: ADD_RECIPES,
    playload: {
        data
    }
})

// Select a recipe
export const selectedRecipe = (data) => ({
    type: SELECTED_RECIPE,
    playload: {
        data
    }
})
