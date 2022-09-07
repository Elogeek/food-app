import {ADD_RECIPES, SELECTED_RECIPE, STEPS_TO_FOLLOW} from "./actionsType";
import {ADD_TASK, DELETE_TASK, TOGGLE_TASK} from "./actionsType";

// Actions : fonctions qui renvoient un objet - {type: MON_ACTION, payload: {DATA}}

/* Recipes */

//Add recipe
export const addRecipes = (data) => ({
    type: ADD_RECIPES,
    playload: {
        data
    }
})

// Select a recipe (single recipe)
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

/* TasksList*/

// ADD_TASK
export function addTask(title) {
    return {
        type: ADD_TASK,
        payload: {
            title
        }
    }
}

// TOGGLE_TASK
export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: {id}
});

// DELETE_TASK
export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: {id}
});
