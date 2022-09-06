import {ADD_RECIPES, SELECTED_RECIPE, STEPS_TO_FOLLOW} from "./actionsType";

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

// Preparation a recipe (steps to follow)
export const stepsToFollowRecipe = (data) => ({
    type: STEPS_TO_FOLLOW,
    playload: {
        data
    }
})
